const express = require("express");
const multer = require("multer");

// Set up storage for uploaded files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

// Create the multer instance
const upload = multer({ storage: storage });

module.exports = upload;

const app = express();

app.post("/api/v1/upload", upload.single("file"), (req, res, next) => {
  res.send(req.file);
});

app.listen(8000, () => {
  console.log("Server started on port 8000");
});
