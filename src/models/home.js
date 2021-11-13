
// Juste un exemple
export default {

    home: (request, response) => {
        response.status(200).json({
            home: "home"
        })
    }
}