const mongoose = require('mongoose');

// Définition du schéma de la personne
const personSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String]
});

// Création du modèle Person basé sur le schéma
const Person = mongoose.model('Person', personSchema);

module.exports = Person;
