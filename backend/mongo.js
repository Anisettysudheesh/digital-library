const mongoose = require ('mongoose');
require('dotenv').config();


mongoose.connect(process.env.MONGO_URL)
.then(()=>{console.log('Connected to MongoDB')})
.catch((err)=>{console.log('Error:',err)});

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
},
{ timestamps: true });

module.exports = mongoose.model("UserDetails",userSchema);