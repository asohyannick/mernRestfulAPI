import mongoose from "mongoose";
const connectDB = async(): Promise<void> => {
    try{
        const connectedString =  await mongoose.connect(
        process.env.MONGODB_URI_CONNECTIONSTRING as string);
        console.log(`MongoDB is connected on :${connectedString.connection.host} successfully!`);
    } catch(error:any) {
        console.error(`Error:${error.message}`);
        process.exit(1);
    }
}
export default connectDB;

