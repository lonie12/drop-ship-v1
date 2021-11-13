// Imported modules from node_modules
import express from "express";


// Imported modules from files
import router from './src/routes/router.js'


// the core of express app
let app = express()


// midllewares
app.use('/drop-ship/', router)


// app port
app.listen(3000 || process.env.PORT)