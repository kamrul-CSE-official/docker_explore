const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.status(200).json({
    title: "Welcome to docker!",
    name: "MD.Kamrul",
    id: 1,
    city: "Dhaka",
    cont: "kamrul@gmail.com"
  });
});

app.listen(port, () => console.log(`Server is runing: http://localhost:${port}`));
