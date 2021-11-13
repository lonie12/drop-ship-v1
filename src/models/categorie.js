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
        let {libelle} = request.body ;

    

        if(libelle)
        {   let Categorie = await prisma.categorie.findUnique({
                        where:{
                            libelle: libelle
                        }
            }) ;
            
            if (!Categorie) {

                        // crée une categorie 
                    Categorie = await prisma.categorie.create({
                        data : {
                                libelle : libelle 
                                } 
                            })

                 return   response.status(200).json(Categorie)

            }

            return response.status(200).json("erreur");

            
        }

        return response.json("error")  ;      
    
          
                
    }, 


    modifier: async (request , response) =>
    {

    },

    suprimer: async (request , response )=>
    {

    }

    // Methodes suivants
}