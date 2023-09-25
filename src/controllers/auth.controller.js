export default {
    login: (req, res) => {
        
        return res.status(200).json({message: "Soy el controlador del login :)"});
    },
    registro : (req, res) => {
        return res.status(200).json({message: "Soy el controlador del registro :D"});
    },
    perfil  : (req, res) => {
        return res.status(200).json({message: "Soy el controlador del perfil :|"});
    },
    logout : (req, res) => {
        return res.status(200).json({message: "Soy el controlador del logout :("});
    },
};