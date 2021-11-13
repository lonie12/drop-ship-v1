// Node modules
import e from "express"


// Local Modules
import route from '../middlewares/route.js'
import home from '../models/home.js'
import categorie from "../models/categorie.js"
export default (() => {
    // Configuration des routes
    let api = e.Router()

    // Routes / (root principal)
    api.route('/').get(route.homeOff, home.home) // L'ajout du middleware homeOff permet de desactiver le fonctionnment de la page
    // Listes des routes
    // api.route('/home').post(model)

    api.route('/categorie').get(categorie.ajouter)
    return api
})()