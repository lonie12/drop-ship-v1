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

    

        if(libelle1)
        {   let Categorie = await prisma.categorie.findFirst({
                        where:{
                            libelle: libelle1 
                        }
            }) ;
            
            if (!Categorie) {

                        // crée une categorie 
                    Categorie = await prisma.categorie.create({
                        data : {
                                libelle : libelle1
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