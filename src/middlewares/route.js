

export default {
    
    homeOff: (request, response, next) => {

        response.status(404).json({
            message: "Cette page est en maintenance veuillez ..."
        })
    }
}