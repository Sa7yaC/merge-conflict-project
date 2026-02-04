import path from 'path';
import { fileURLToPath } from 'url';
import mongoose from "mongoose"
import dotenv from "dotenv"
import { DB_NAME } from "../constants.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, 'D:/merge-conflict/merge-conflict-project/backend/.env') });

const connectDB = async() => {
    try{
        const connectionInstance = await mongoose.connect(`${process.env.DB_URI}/${DB_NAME}`)
        console.log(`\n mongoDB connected !! DB HOST: ${connectionInstance.connection.host}`)
    }
    catch(error){
        console.log("MongoDB connection failed");
        process.exit(1)
    }
}

export default connectDB;