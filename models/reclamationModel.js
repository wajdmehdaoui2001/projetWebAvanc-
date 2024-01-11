const mongoose = require("mongoose");
const reclamationSchema=mongoose.Schema({
    nom: {
        type: String,
        required: [true, "Veuillez ajouter votre nom"],
    },
    prenom: {
        type: String,
        required: [true, "Veuillez ajouter votre prenom"],
    },
    dateNaissance: {
        type: Date,
        required: [true, "Veuillez ajouter votre date de naissance"], 
    },
    civilite:{
        type:String,
        enum:['célibataire','marié(e)']

    },
    cin:{
        type: String,
        required:[true, "veuillez ajouter votre CIN"]

    },
    rib:{
        type:String,
        required:[true,"veuillez ajouter votre RIB"],
    },
    sujet:{
        type:String,
        enum:['compte','carte','accueil dans l\'agence']
    },
    texte:{
        type:String

    }


    },
    {
        timestamps:true,
    }


);
module.exports=mongoose.model("Reclamation", reclamationSchema);