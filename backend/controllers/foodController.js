
import foodModel from "../models/foodModel.js";
import  fs from 'fs';


//add food item
const addFood=async(req,res)=>{
let image_filename=`${req.file.filename}`;
const food=new foodModel({
    name:req.body.name,
    description:req.body.description,
    price:req.body.price,
    category:req.body.category,
    image:image_filename
})
try{
   await food.save() ;
   res.json({success:true,message:"food added"});
}
catch(error){
  console.log(error);
  res.json({success:false,message:"error"});
}
}

// all food list fetching from db
const listFood=async(req,res)=>{
try{
const foods=await foodModel.find({});
res.json({success:true,data:foods})
}
catch(error){
console.log("error");
res.json({success:false,message:"error"})
}
}



// remove food from db
const removeFood=async(req,res)=>{
  try{
    const food=await foodModel.findById(req.body.id); // it find foodmodel by id 
    fs.unlink(`uploads/${food.image}`,()=>{}); // this line delete image from folder
   await foodModel.findByIdAndDelete(req.body.id);
   res.json({success:true,message:"food removed"});
  }
  catch(error){
   console.log("error occur");
   res.json({success:false,message:"error"});
  }
}



export {addFood,listFood,removeFood}


