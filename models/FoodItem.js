const mongoose = require("mongoose");

const FoodItemSchema = new mongoose.Schema({
    text: {
        type: String,
        trim: true,
        required: [true, "Please add some text"]
    },
    date: {
        type: String,
        required: [true, "Please add an expiry date"]
    }
});

module.exports = mongoose.model("FoodItem", FoodItemSchema);