import express from "express";
import mongoose from "mongoose";
import route from "./routes/index.js";
import cors from "cors";

const PORT=8080;
const app = express();

mongoose.connect("mongodb://localhost:27017/restful_db");

const db = mongoose.connection;
db.on('error', (err) => console.error(error));
db.once('open', () => console.log('Database Connected'));

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended:false }));
app.use(cors());
app.use('/', route);

app.listen(PORT, (err)=>{
    if (err) {
        console.log(err)
    } else {
        console.log(`Server is running at port ${PORT}`)
    }
});