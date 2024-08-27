import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name:{
        type:String, require:true , trim:true,
    },
    age:{
        type:Number, require:true, min:18,max:65
    }

});
const itemModel = mongoose.model('coders',userSchema);
export default itemModel;