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
app.use((req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://your-frontend.com"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS,CONNECT,TRACE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, X-Content-Type-Options, Accept, X-Requested-With, Origin, Access-Control-Request-Method, Access-Control-Request-Headers"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Private-Network", true);
  //  Firefox caps this at 24 hours (86400 seconds). Chromium (starting in v76) caps at 2 hours (7200 seconds). The default value is 5 seconds.
  res.setHeader("Access-Control-Max-Age", 7200);

  next();
});
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



















