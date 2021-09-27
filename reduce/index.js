const valorArray = [22, 12, 2002, 453, 43, 65]

const valorTotalArray = valorArray.reduce((anterior, atual) => anterior + atual, 0)

console.log(valorTotalArray)
