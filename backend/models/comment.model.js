import mongoose, { mongo } from "mongoose";
import { Schema } from "mongoose";


const commentSchema=mongoose.Schema({
    user:{
        type:Schema.Types.ObjectId, ref:"User",required:true
            },
            post:{
                type:Schema.Types.ObjectId, ref:"Post",required:true
                    },
    desc:{
        type:String,
        required:true
    }
    

},{timestamps:true})

export default mongoose.model("Comment",commentSchema);