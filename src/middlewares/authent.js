import jwt from "jsonwebtoken";

export default {

    verify: (request, response, next) => {
        let Bearer = request.headers.authorization
        if(typeof Bearer != 'undefined') {
            if(Bearer.indexOf('Bearer') != -1) {
                let token = Bearer.split(' ')[1]
                jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
                    if(!err) {
                        request.user = user
                        next()
                    } else {
                        response.status(403).json({
                            error: "Invalid token"
                        })
                    }
                })
            }
        } else {
            response.status(403).json({
                error: "A token is required"
            })
        }
    }
}