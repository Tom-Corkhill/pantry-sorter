const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const connectDB = require("./config/db");

dotenv.config({ path: "./config/config.env" });

connectDB();
 
const pantry = require("./routes/pantry");
const favourites = require("./routes/favourites");

const app = express();

app.use(express.json());


if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

app.use("/pantry", pantry);
app.use("/favourites", favourites);


const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));