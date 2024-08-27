import express from "express";
import itemModel from "../Model/UserSchema.js";
const router = express.Router();

router.get('/',async(req,res)=>{
    try {
        const users = await itemModel.find();

        res.json(users);
        console.log(users);
    } catch (error) {
      console.log('Error:',error);  
    }

});
router.post('/',async(req,res)=>{
    try {
        const user = new itemModel({
            name:req.body.name,
            age: req.body.age

        });
        const createUser = await user.save(); 
        res.json(createUser);
    } catch (error) {
      console.log('Error:',error);  
    }

});
router.patch('/:id',async(req,res)=>{
    try {
        const user = new itemModel({
            name:req.body.name,
            age: req.body.age

        });
        const createUser = await user.save(); 
        res.json(createUser);
    } catch (error) {
      console.log('Error:',error);  
    }

});
export default router;