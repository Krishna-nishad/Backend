const mongoose = require("mongoose")

function connectToDb(){
    mongoose.connect("procress.env.MONGO_URI")
    .then(()=>{
        console.log("connected to db successfully")
    })
    
}


module.exports = connectToDb


