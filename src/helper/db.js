import mongoose from "mongoose"
import {User} from '../model/user';

export const connectDb = async ()=>{
    try {
        const {connection} = await mongoose.connect(process.env.MONGODB_URI,{
            dbName:"wwork_manager",
        })
        console.log("DB Connected ")
    } catch (error) {
        console.log("Error")        

    }
}