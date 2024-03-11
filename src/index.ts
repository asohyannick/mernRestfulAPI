import express, { Application,Request, Response, NextFunction } from 'express';
const app:Application = express();
const PORT:number = 5000;
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.get('/', function(req:Request, res:Response, next:NextFunction) {
    res.send("API is working...")
});
app.listen(PORT, () => [
    console.log(`Server is running on port ${PORT}...`)
]);
