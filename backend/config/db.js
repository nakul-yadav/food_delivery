import  mongoose from "mongoose";




 export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://nik24705:UOtt3BSnHnE82iQX@cluster0.ateqf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(()=>console.log("db cionect"))
    
}









