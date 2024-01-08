const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
exports.connectDatabase = () => {
  mongoose
    .connect(process.env.URI)
    .then((con) =>
      console.log(`Database connnnnnnnnnnnected: ${con.connection.host}`)
    )
    .catch((err) => console.log(err));
};
