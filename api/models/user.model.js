import mongoose from "mongoose";
const useSchema=mongoose.Schema({
    username:{
    type:String,
    required:true,
    unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true, 
    },
    password:{
        type:String,
        required:true,
    }
},{timestamps:true});
const user=mongoose.model('User',useSchema);
export default user;