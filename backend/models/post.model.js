import mongoose, { mongo } from "mongoose";
import { Schema } from "mongoose";


const postSchema=mongoose.Schema({
    user:{
type:Schema.Types.ObjectId, ref:"User",required:true
    },
     img:{
        type:String,
     },
     title:{
        type:String,
        required:true
     },
     slug:{
        type:String,
        required:true,
        unique:true
     },
     desc:{
        type:String
     },
     content:{
        type:String,
        required:true
     },
     isFeatured:{
        type:Boolean,
        default:false
     },
     visit:{
        type:Number,
        default:0
     }


},{timestamps:true})


export default mongoose.model("Post",postSchema);