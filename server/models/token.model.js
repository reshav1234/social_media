const mongoose = require('mongoose')
const Schema = mongoose.Schema
const tokenSchema = new Schema(
    {
        user:{
            type:Schema.Types.ObjectID,
            ref:"User",
            required:true,
        },

        refreshToken:{
            type:String,
            required:true,
        },

        accessToken:{
            type:String,
            required:true,
        }
    }
)

module.exports = mongoose.model("Token",tokenSchema)