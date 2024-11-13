const Person = require('./person'); // Importation du modèle Person

// Création d'une nouvelle personne
const person = new Person({
  name: 'John Doe',
  age: 30,
  favoriteFoods: ['Pizza', 'Burgers']
});

// Sauvegarde de la personne dans la base de données
person.save((err, data) => {
  if (err) {
    console.error("Erreur lors de la sauvegarde :", err);
  } else {
    console.log("Personne sauvegardée :", data);
  }
});
