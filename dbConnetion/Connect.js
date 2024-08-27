import mongoose from "mongoose";

const dbConnection = async (url)=>{
     
     try {
        const DbOption = {
            dbName:'UserDb'
         }
     
        await mongoose.connect(url,DbOption);
        console.log(`DataBase Connected Successfully......`);
        
     } catch (error) {
         console.log(error);
     }
} 
export default dbConnection;
