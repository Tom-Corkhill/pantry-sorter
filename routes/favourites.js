const express = require("express");
const router = express.Router();
const { getFavouriteItems, addFavouriteItem, deleteFavouriteItem, addFavouriteToPantry } = require("../controllers/favourites");


router
    .route("/")
    .get(getFavouriteItems)
    .post(addFavouriteItem);

router
    .route("/:id")
    .delete(deleteFavouriteItem);

router
    .route("/newfood")
    .post(addFavouriteToPantry);

module.exports = router; 