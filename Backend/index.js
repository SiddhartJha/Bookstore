import express from "express"; // type is done as module in package.json so that we can use import instead of require to import files or dependencies
import dotenv from "dotenv";
import mongoose from "mongoose";
const app = express();
import cors from "cors"

import bookRoute from "./route/book.route.js"
import userRoute from "./route/userRoute.js"

app.use(cors());
app.use(express.json()); // jo bhi data hum bhej rhe hain usko json me parse krega. 

dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// connecting to mongodb database

try{
   mongoose.connect(URI);
   console.log("connected to mongodb");
}catch(error) {
   console.log("Error: ",error);

}

// defining routes

app.use("/book", bookRoute)
app.use("/user",userRoute);

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
