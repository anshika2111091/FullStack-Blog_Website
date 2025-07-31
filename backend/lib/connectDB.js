import mongoose, { connect } from "mongoose";

const connectDB=async()=>{
    try{
    await  mongoose.connect("mongodb://localhost:27017/blog_application");
      console.log("Mongodb is connected")
    }
    catch(err){
        console.log(err);
    }

}
export default connectDB;