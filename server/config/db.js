// setting up databse using mongodb

const mongoose = require('mongoose')

// env 
const db = process.env.MONGOURI 

// making connection to our database
const connectDB = async () => {
    try{
        await mongoose.connect(db, {
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        console.log("MongoDB connected")
    }catch(err){
        console.log("err.message")
        process.exit(1)
    }
}

const disConnectDB = async () =>{
    try{
        await mongoose.disconnect(db)
        console.log("Database disconnected")
        process.exit(0)
    }catch(err){
        console.log(err.message)
        process.exit(1)
    }
}

module.exports = {connectDB, disConnectDB}