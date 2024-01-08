import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import "../Home/Home.css";
const User = ({ sty, userId, name, avatar }) => {
  return (
    <Link
      style={sty === 1 ? { flexDirection: "column" } : {}}
      to={`/user/${userId}`}
      className={"homeUser" + " " + "hi"}
    >
      <img src={avatar} alt={name} />
      <Typography className="avname">{name}</Typography>
    </Link>
  );
};

export default User;
