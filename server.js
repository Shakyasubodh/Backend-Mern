const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const itemRoutes = require("./routes/Routes");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;


connectDB();


app.use(cors());
app.use(express.json());


app.use("/api/items", itemRoutes);

app.get('/home', (req, res) => {
    res.status(200).json('Welcome, your app is working well');
  });

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
