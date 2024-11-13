const personId = '60c72b2f9b1d8b1a9c3e50f5'; // Exemple d'_id

Person.findById(personId, (err, person) => {
  if (err) {
    console.error("Erreur de recherche :", err);
  } else {
    // Ajout d'un aliment préféré
    person.favoriteFoods.push('Hamburger');

    // Sauvegarde du document mis à jour
    person.save((err, updatedPerson) => {
      if (err) {
        console.error("Erreur lors de la mise à jour :", err);
      } else {
        console.log("Personne mise à jour :", updatedPerson);
      }
    });
  }
});
