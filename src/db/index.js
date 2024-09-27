import mongoose from "mongoose";
import { DB_NAME } from "../constens.js";


const connectDb = async () => {
    try {
     const connectDbInctance =  await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
     console.log(`\n MONGODB CONNECTED  !! DB HOST ${connectDbInctance.connection.host}`);
    } catch (error) {
        console.error("some error in mongoDB db/index.js",error);
        process.exit(1)

    }
}
export default connectDb;

