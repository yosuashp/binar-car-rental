function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);
  // Tempat penampungan hasil
  const result = [];

  // Tulis code-mu disini
  for (let a = 0; a < cars.length; a++) {
    if (cars[a].available) {
      result.push(cars[a]);
    }
  }
  console.log(result);
  console.table(result);
  // Rubah code ini dengan array hasil filter berdasarkan availablity
  return result;
}