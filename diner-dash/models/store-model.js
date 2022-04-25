const mongoose = require('../db/connection')

const StoreSchema = new mongoose.Schema(
    {
        cuisine: { type: String },
        cuisineStores: [{
            name: {
                type: String,
                required: true
            },
            image: {
                type: String
            },
            tags: [{
                type: String
            }],
            location: {
                type: String
            },
            zipcode: {
                type: Number
            },
            hours: {
                time: {
                    type: String
                },
                days: [{
                    type: String
                }]
            },
            reservations: {
                type: Boolean
            },
            delivery: {
                type: Boolean
            },
            takeOut: {
                type: Boolean
            },
            officialSite: {
                type: String
            },
            phone: {
                type: String
            }
        }]
    }
)

const Store = mongoose.model("Store", StoreSchema)

module.exports = Store

