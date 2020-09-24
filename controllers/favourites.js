const FavouriteItem = require("../models/FavouriteItem");
const FoodItem = require("../models/FoodItem");

// @desc       Get all Favourite items
// @route      GET /api/v1/favourites
// @access     Public
exports.getFavouriteItems = async (req, res, next) => {
    try {
        const favouriteItems = await FavouriteItem.find();

        return res.status(200).json({
            success: true,
            count: favouriteItems.length,
            data: favouriteItems
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: "Server Error"
        });
    }
}

// @desc       Add a Favourite item
// @route      POST /api/v1/favourites
// @access     Public
exports.addFavouriteItem = async (req, res, next) => {
    try {
        const { text } = req.body;

        const favouriteItem = await FavouriteItem.create(req.body);

        return res.status(201).json({
            success: true,
            data: favouriteItem
        });
    } catch (err) {
        if(err.name === "ValidationError") {
            const messages = Object.values(err.errors).map(val => val.message);

            return res.status(400).json({
                success: false,
                error: messages
            });
        } else {
            return res.status(500).json({
                success: false,
                error: "Server Error"
            });
        }
    }
}

// @desc       Delete a Favourite item
// @route      DELETE /api/v1/favourites/:id
// @access     Public
exports.deleteFavouriteItem = async (req, res, next) => {
    try {
        const favouriteItem = await FavouriteItem.findById(req.params.id);

        if(!favouriteItem) {
            return res.status(404).json({
                success: false,
                error: "No Favourite item found"
            });
        }

        await favouriteItem.remove();

        return res.status(200).json({
            success: true,
            data: {}
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: "Server Error"
        });
    }
}

// @desc       Add Favourite item to pantry
// @route      POST /api/v1/favourites/newfood
// @access     Public
exports.addFavouriteToPantry = async (req, res, next) => {
    try {
        const { text, date } = req.body;

        const foodItem = await FoodItem.create(req.body);

        return res.status(201).json({
            success: true,
            data: foodItem
        });
    } catch (err) {
        if(err.name === "ValidationError") {
            const messages = Object.values(err.errors).map(val => val.message);

            return res.status(400).json({
                success: false,
                error: messages
            });
        } else {
            return res.status(500).json({
                success: false,
                error: "Server Error"
            });
        }
    }
}