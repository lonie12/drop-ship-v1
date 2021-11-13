// Imported modules from node_modules
import e from "express";


// Imported modules from files
import router from './src/routes/router.js'


// the core of express app
let app = e()


// midllewares
app.use(e.urlencoded({extended: true}))
app.use(e.json())
app.use('/drop-ship/', router)


// app port
app.listen(3000 || process.env.PORT)