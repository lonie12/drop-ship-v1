import pkg  from "@prisma/client"
const {PrismaClient} = pkg
const prisma = new PrismaClient()


export default  {

    init: (request, response) => {
        // traitements
        response.status.json({
            message: "Ceci est le Model fournisseur"
        })
    },

    ajouter: async (request,response) => {
        let {nom,telephone,localite} = request.boby
        //verifier si il a envoyer le nom,telephone,localiter
        if (nom&&telephone&&localite) {
            //on cree le fournisseur dans la base
            let fournisseur = await prisma.fournisseur.create({
                data:{
                    nom: nom,
                    telephone: telephone,
                    localite: localite
                }
            });
            //on renvoi le fourniseur
            return response.status(200).json(fournisseur)
        }
        //si ils n'a pas renseigner le non ,le telephoneet la localiter 
        return response.status(200).json({error:"all fields required "})
    },

    modifier: async (request,response) => {
        let{fournisseurid} = request.params
        let {nom,telephone,localite} = request.body 
        //l'id du fournisseur doit tjr etre renseigner 
        //seul un des trois est important
        if (fournisseurid&&(nom||telephone||localite)) {
            //on verifie si le fourniseur exit  
            let fournisseur = await prisma.fournisseur.findUnique({
                where:{
                     id:fournisseurid
                }
            }) 
            // si oui
            if (fournisseur) {
                // on l'ajoute
                fournisseur = await prisma.fournisseur.update({
                    where:{
                        id:fournisseurid
                    },
                    data:{
                        nom:nom,
                        telephone:telephone,
                        localite:localite
                    }
                })
                return response.status(200).json(fournisseur)
            }
            //sinon on retourne une erreur
            return response.status(200).json({error:"fournisseur not find"})
        }
        // si il n'a pas envoyer l'id et l'un des trois 
        return response.status(200).json({error:"fournisseur ID required ,field you want change also"})
    },

    suprimer: async (request,response) => {
        let {fournisseurid} = request.params
        //si il a envoyer  id du fournisseur
        if (fournisseurid) {
            let fournisseur = await prisma.fournisseur.delete({
                where:{
                    id: fournisseurid,
                }
            })
            return response.status(200).json(fournisseur)
        }
        //sinon on envoie l'erreur
        return response.status(200).json({error:"fournisseur ID required"})
    },
    // Methodes suivants
}