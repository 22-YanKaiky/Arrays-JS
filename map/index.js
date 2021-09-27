const number = [1, 2, 3, 4, 5, 6, 7, 8]

const doubleNumber = number.map(function(el) {
   return el * 10
})

const doubleNumber = number.map( el => el * 10 )

console.log(doubleNumber)

//Fareinheight to Celsius ++++++++++++++++++++++++++++++++++++++++++

const farenheight = [5, 34, 56, 78, 132, 251]

const celsius = farenheight.map( function(el) {
   return Math.round(((el - 32) * 5) / 9)
} )

const celsius = farenheight.map( el => Math.round(((el - 32) * 5) / 9))

console.log(celsius)
