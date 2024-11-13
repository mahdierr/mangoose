const peopleArray = [
    { name: 'Alice', age: 25, favoriteFoods: ['Salad', 'Pasta'] },
    { name: 'Bob', age: 35, favoriteFoods: ['Steak', 'Fries'] }
  ];
  
  // Utilisation de `create()` pour enregistrer plusieurs personnes
  Person.create(peopleArray, (err, people) => {
    if (err) {
      console.error("Erreur lors de la création :", err);
    } else {
      console.log("Personnes créées :", people);
    }
  });
  