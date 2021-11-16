//inportations des entiter(prisma)
import pkg from '@prisma/client'
const {PrismaClient}  = pkg
const prisma = new PrismaClient()

export default  {

    init: (request, response) => {
        // traitements
        response.status.json({
            message: "Ceci est le Model categorie"
        })
    },
    
    //controlleur ajout categorie 
    ajouter: async (request,response) => {
        // je recupere le libellé de la requete
        let libelle1 = request.body.libelle ;
        //on verifie si il a envoyer le libelle
        if(libelle1){  
            //je vois si cette categorie exist deja 
            let Categorie = await prisma.categorie.findFirst({
                where:{
                    libelle: libelle1 
                }
            });     // si il n y a pas de categorie de ce type je continu 
                    if (!Categorie) {
                        // crée une categorie 
                        Categorie = await prisma.categorie.create({
                                    data:{
                                            libelle : libelle1
                                    } 
                        })
                        return   response.status(200).json(Categorie)

                    }
                    //erreur : la categorie exist deja 
                    return response.status(200).json({
                        error: libelle1+' '+"alredy exist"
                    });     
        }
        // erreur: il n'a pas renseigner libeller 
        return response.json({
            error: 'require libelle'
        })  ;                 
    }, 


    modifier: async (request , response) =>
    {
        let categorieid = request.params.categorieid 
        let {libelle} = request.body
            if (categorieid) {
                // on recherche pour voir verifie si la categorie exist
                let Categorie = await prisma.categorie.findUnique({
                    where:{
                        id: categorieid
                    }
                });  
                   // si la categorie exist
                    if (Categorie!=null) {
                            // modifier la categoire
                            Categorie = await prisma.categorie.update({
                            where:{
                                id : categorieid
                            },
                            data:{
                                    libelle : libelle
                            } 
                        })
                        //on renvoie la categorie modifié
                        return response.status(200).json(Categorie)
                    }
                    // on renvoie la catorie modifier
                    return  response.status(200).json({
                        error: "categorie not exist"
                    }); 

            }
            return  response.status(200).json({
                error: "reseigne categorie ID"
            });

    },

    supprimer: async (request , response )=>
    {
        let categorieid = request.params.categorieid 
        //on verifie si il a envoye
        if (categorieid) {
            const categorie = await prisma.categorie.delete({
                where:{
                    id: categorieid
                }
            });
            return response.status(200).json(categorie);
        }
        //sinon erreur    
        return response.status(200).json({error:"reseigne categorie ID"})
    }

    // Methodes suivants
}