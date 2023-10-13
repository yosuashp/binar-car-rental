function sortCarByYearDescendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini
  for (let a = 0; a < result.length; a++) {
    for (let b = 0; b < result.length - 1; b++) {
      if (result[b].year < result[b + 1].year) {
        let temp = result[b];
        result[b] = result[b + 1];
        result[b + 1] = temp;
      }
    }
  }

  console.log(result);
  console.table(result);
  // Rubah code ini dengan array hasil sorting secara descending
  return result;
}
