const mongoose = require('../db/connection')

const CategorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required:true
        },
        img: {
            type: String
        }
    }
)

const Category = mongoose.model("Category", CategorySchema)


module.exports = Category