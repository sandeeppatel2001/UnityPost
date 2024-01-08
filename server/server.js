const app = require("./app.js");
const { connectDatabase } = require("./config/database.js");
const cloudinary = require("cloudinary");
require("dotenv").config();

// Config;
// if (process.env.NODE_ENV !== "production") {
//   require("dotenv").config({ path: "config/config.env" });
// }

connectDatabase();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
