import   express from 'express';
import cors from 'cors';
import   {connectDB} from './config/db.js';
import foodModel from './models/foodModel.js';
import  foodRoute from './routes/foodRoute.js';
import userRoute from './routes/userRoute.js';
import "dotenv/config";
import cartRoute from './routes/cartRoute.js';
import orderRoute from './routes/orderRoute.js';


//app config
const app=express();
const port=process.env.PORT||4000;

//middleware
app.use(express.json());
app.use(cors());
// db connection 
connectDB();

//api endpoint
app.use("/api/food",foodRoute);
app.use("/images",express.static("uploads"));
app.use("/api/user",userRoute);
app.use("/api/order",orderRoute);
app.use("/api/cart",cartRoute);






app.get("/",(req,res)=>{
res.send("working");

})


app.listen(port,(req,res)=>{
console.log("server started")
})


//mongodb+srv://nakulyadav:Jaishreeram@cluster0.khlszvk.mongodb.net/?



















