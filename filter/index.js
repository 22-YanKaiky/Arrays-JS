let valorTotal = [1, 4, 6, 6, 3, 434, 65, 56, 4, 3, 32, 65, 4]

var semRepetidos = valorTotal.filter(function(el, i) {
   return valorTotal.indexOf(el) === i;
});
console.log(semRepetidos);
