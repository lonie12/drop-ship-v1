// Node modules
import e, { application } from "express"


// Local Modules
import route from '../middlewares/route.js'
import home from '../models/home.js'
import categorie from "../models/categorie.js"
import utilisateur from "../models/utilisateur.js"
import fournisseur from "../models/fournisseur.js"
export default (() => {
    // Configuration des routes
    let api = e.Router()

    // Routes / (root principal)
    api.route('/').get(route.homeOff, home.home) // L'ajout du middleware homeOff permet de desactiver le fonctionnment de la page
    // Listes des routes
    // api.route('/home').post(model)

    //Categories
    api.route('/categorie/modifier/:categorieid').post(categorie.modifier)
    api.route('/categorie/ajouter').post(categorie.ajouter)
    api.route('/categorie/supprimer/:categorieid').get(categorie.supprimer)

    //Users
    api.route('/users/login').post(utilisateur.login)
    api.route('/users/register').post(utilisateur.register)

    //Fournisseur
    api.route('/fournisseur/ajouter').post(fournisseur.ajouter)
    api.route('/fournisseur/modifier/:fournisseurid').post(fournisseur.modifier)
    api.route('/fournisseur/supprimer/:fournisseurid').get(fournisseur.suprimer)     
    return api
})()