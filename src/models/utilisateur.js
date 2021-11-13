import pkg from "@prisma/client"
let {PrismaClient} = pkg
import bcrypt from 'bcrypt'

let prisma = new PrismaClient()


export default  {

    init: (request, response) => {
        // traitements
        response.status.json({
            message: "Ceci est le Model utilisateur"
        })
    },

    // Methodes suivants
    login: async (request, response) => {
        let {email, password} = request.body
        if(!(email && password)) {
            response.status(403).json({
                error: "All fields is required"
            })
        } else {
            let user = await prisma.user.findFirst({
                where: {
                    email: email,
                }
            })
            if(!user || !(await bcrypt.compare(password, user.password))) {
                response.status(404).json({
                    error: 'Invalid credentials '
                })
            } else {
                response.status(200).json(user)
            }
        }
    },

    register: async (request, response) => {
        let {nom, email, telephone, password} = request.body
        if(!(email, password, telephone, nom)) {
            response.status(403).json({
                error: "All fields are required"
            })
        } else {
            let user = await prisma.user.findFirst({
                where: {
                    email: email
                }
            })
            if(!user) {
                user = await prisma.user.create({
                    data: {
                        nom: nom,
                        email: email,
                        telephone: telephone,
                        password: await bcrypt.hash(password, 12)
                    }
                })
                response.status(201).json(user)

            } else {
                response.status(401).json({
                    error: "User already exists"
                })
            }
        }
    }
}