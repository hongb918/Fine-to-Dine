const mongoose = require('../db/connection')

const StoreSchema = new mongoose.Schema(
    {
        "name": String,
        "cuisine": String,
        "image": String,
        "tags": [String],
        "location": String,
        "zipcode": Number,
        "hours": String,
        "days": [String],
        "reservations": Boolean,
        "delivery": Boolean,
        "takeOut": Boolean,
        "officialSite": String,
        "phone": String
    }
)

const Store = mongoose.model("Store", StoreSchema)

module.exports = Store

