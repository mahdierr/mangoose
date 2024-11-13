// Importation des modules nécessaires
const mongoose = require('mongoose');
require('dotenv').config();

// Connexion à MongoDB avec l'URI stocké dans le fichier .env
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Connexion réussie à MongoDB !");
}).catch((err) => {
  console.error("Erreur de connexion :", err);
});
