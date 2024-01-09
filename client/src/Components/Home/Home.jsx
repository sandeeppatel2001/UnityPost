import React, { Fragment, useEffect } from "react";
import Post from "../Post/Post";
import User from "../User/User";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers, getFollowingPosts } from "../../Actions/User";
import Loader from "../Loader/Loader";
import { Typography } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const dispatch = useDispatch();

  const { loading, posts } = useSelector((state) => state.postOfFollowing);
  console.log(posts);

  const { users, loading: usersLoading } = useSelector(
    (state) => state.allUsers
  );

  const { error: likeError, message } = useSelector((state) => state.like);

  useEffect(() => {
    dispatch(getFollowingPosts());
    dispatch(getAllUsers());
  }, [dispatch]);

  useEffect(() => {
    if (likeError) {
      toast.error(likeError);
      dispatch({ type: "clearErrors" });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }
  }, [dispatch, likeError, message]);
  return (
    <Fragment>
      {loading === true || usersLoading === true ? (
        <Loader />
      ) : (
        <div className="home">
          <div className="homeleft">
            {posts && posts.length > 0 ? (
              posts.map((post) => (
                <Post
                  key={post._id}
                  postId={post._id}
                  caption={post.caption}
                  postImage={post.image.url}
                  likes={post.likes}
                  comments={post.comments}
                  ownerImage={post.owner.avatar.url}
                  ownerName={post.owner.name}
                  ownerId={post.owner._id}
                  time={post.createdAt}
                />
              ))
            ) : (
              <Typography variant="h6"> No Posts Yet</Typography>
            )}
          </div>
          <div className="homeright">
            <hr className="hr"></hr>
            {users && User.length > 0 ? (
              users.map((user) => (
                <div className="profilerow">
                  <User
                    sty={1}
                    key={user._id}
                    userId={user._id}
                    name={user.name}
                    avatar={user.avatar.url}
                  />
                  <hr></hr>
                </div>
              ))
            ) : (
              <Typography variant="h6">No Users yet</Typography>
            )}
          </div>
        </div>
      )}
      <ToastContainer
        position="top-center"
        hideProgressBar={true}
        theme="dark"
        autoClose={5000}
      />
    </Fragment>
  );
};

export default Home;
