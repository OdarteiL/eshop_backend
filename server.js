require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose")
const morgan = require("morgan");
const bodyParser = require("body-parser");
const port = process.env.PORT || 5000;

const app = express();

// Middlewares
app.use(cors());
app.options("*", cors());
app.use(express.json());
app.use(morgan("tiny"));
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });
  

// Routes
const categoriesRoutes = require("./routes/categoryRoute");
const productsRoutes = require("./routes/productRoute");
const usersRoutes = require("./routes/userRoute");
const ordersRoutes = require("./routes/orderRoute");

const api = process.env.API_URL || "/api";

app.use(`${api}/categories`, categoriesRoutes);
app.use(`${api}/products`, productsRoutes);
app.use(`${api}/users`, usersRoutes);
app.use(`${api}/orders`, ordersRoutes);

// Database
const connectDB = require("./config/db");
connectDB();

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
