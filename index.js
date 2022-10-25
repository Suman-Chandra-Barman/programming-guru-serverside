const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

const courses = require("./data/courses.json");
app.use(cors());

app.get("/", (req, res) => {
  res.send("Programming Guru Server is Running...");
});

app.get("/courses", (req, res) => {
  res.send(courses);
});
app.get("/courses/:id", (req, res) => {
  const id = req.params.id;
  const course = courses.find((c) => c.id == id);
  res.send(course);
});

app.listen(port, () => {
  console.log(`Programming Guru server running on port ${port}`);
});
