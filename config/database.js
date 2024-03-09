const mongoose = require("mongoose")

require("dotenv").config()

const dbConnect = () => {

    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParse:true,
        useUnifiedTopology:true
    }).then(()=>{
        console.log("db connection success")
    }).catch((error)=>{
        console.log("db connection fail")
        process.exit(1)
    })

}

module.exports = dbConnect