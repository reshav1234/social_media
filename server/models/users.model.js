const mongoose = require("mongoose")
const Schema = mongoose.Schema
const userSchema = new Schema(
    {
        name:{
            type:String,
            required: true,
            trim:true,
        },
        email:{
            type:String,
            required:true,
            unique:true,
            trim:true,
        },
        password:{
            type:String,
            required:true,
        },
        acatar:{
            type:String,
        },
        followers:[
            {
                type:Schema.Types.ObjectID,
                ref:"User",
            },
        ],
        following:[
            {
                type:Schema.Types.ObjectID,
                ref:"User",
            },
        ],
        location:{
            type:String,
            default:"",
        },

        bio:{
            type:String,
            default:""
        },

        role:{
            type:String,
            enum:['general', 'moderator', 'admin'],
            default:'general'
        },

        savedPosts: [
            {
                type:Schema.Types.ObjectID,
                ref:'Post',
                default:[],
            },
        ],

        isEmailVerified:{
             type:Boolean,
             default:false 
        },
    },
    {
        timestamps: true,
    }
)

userSchema.index({ name: 'text' })
module.exports = mongoose.model("User", userSchema)