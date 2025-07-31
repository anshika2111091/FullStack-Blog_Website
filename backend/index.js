import express from "express"
import userRoutes from "./routes/user.route.js"
import postRoutes from "./routes/post.route.js"
import commentRoutes from "./routes/comment.route.js"
import connectDB from "./lib/connectDB.js";

const app=express();
connectDB();
app.use("/users",userRoutes);
app.use("/posts",postRoutes);
app.use("/comments",commentRoutes);


app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})