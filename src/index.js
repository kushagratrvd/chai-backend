// require('dotenv').config({path: './env'})
import dotenv from "dotenv";
import { app } from "./app.js";
import connectDB from "./db/index.js";

dotenv.config({
    path: './.env'
});

connectDB()
.then( () => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is connected at port ${process.env.PORT}`);
    }),
    app.on("error", (error) => {
        console.log("ERRR: ", error);
        throw error
    })
})
.catch((err) => {
    console.log("MONGO DB connnection failed!!!", err)
})

/*
import express from "express"
const app = express()

;( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        application.on("error", (error) => {
            console.log("ERRR: ", error);
            throw error
        })

        application.listen(process.env.PORT, () => {
            console.log(`app is listening on port ${process.env.PORT}`);
        })
    } catch (error) {
        console.error("ERROR: ", error)
        throw err
    }
})()
*/