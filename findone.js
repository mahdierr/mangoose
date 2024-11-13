Person.findOne({ favoriteFoods: 'Pizza' }, (err, person) => {
    if (err) {
      console.error("Erreur de recherche :", err);
    } else {
      console.log("Personne trouvée :", person);
    }
  });
  