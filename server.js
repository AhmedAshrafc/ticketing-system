const express = require("express");
const app = express();
const PORT = 3005;

const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/hospitals", (req, res) => {
  const hospitals = [
    { name: "Hospital A", location: "City A" },
    { name: "Hospital B", location: "City B" },
    { name: "Hospital C", location: "City C" },
  ];

  res.json(hospitals);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
