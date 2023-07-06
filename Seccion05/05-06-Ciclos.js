inicio: for (let contador = 0; contador <= 10; contador++) {
  if (contador % 2 !== 0) {
    // break inicio;
    continue inicio; //ir a la siguiente iteracion
  }
  console.log(contador);
}
