import express, { Application,Request, Response, NextFunction } from 'express';
import 'dotenv/config';
import cors from 'cors';
import mongoose from 'mongoose';
const app:Application = express();
const PORT:number = parseInt(process.env.PORT ?? '5000') || 5000;
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
// routes
app.get('/', function(req:Request, res:Response, next:NextFunction) {
    res.send("API is working...")

});
// db
mongoose.connect(process.env.MONGODB_URI_CONNNECTIONSTRING as string).then(() => {
    console.log('Connected to database:', process.env.MONGODB_URI_CONNNECTIONSTRING as string)
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`)
});
