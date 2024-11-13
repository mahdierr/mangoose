Person.find({ name: 'John Doe' }, (err, people) => {
    if (err) {
      console.error("Erreur de recherche :", err);
    } else {
      console.log("Personnes trouvées :", people);
    }
  });
  