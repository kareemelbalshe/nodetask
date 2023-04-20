import express from "express";
import { engine } from 'express-handlebars'
import studentRouters from "./routes/studentsroute.js"
import userRouters from "./routes/usersroute.js"
import mongoose from "mongoose";

mongoose.connect('mongodb://127.0.0.1:27017/student')

const app = express()

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './templates');


app.use("/student",studentRouters)
app.use("/user",userRouters)



app.listen(3000);