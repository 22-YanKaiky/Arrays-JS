const array = [12, 23, 345, 56]

const arrraydez = array.every( elem => elem > 10 )

console.log("São maiores que 10?", arrraydez)


const valor = [
   { id: 12, name: "Frederico", age: 28 },
   { id: 47, name: "Francisca", age: 27 },
   { id: 77, name: "Ramon", age: 48 },
   { id: 85, name: "Zenon", age: 52 }
]

const valordezoito = valor.every( maior => maior.age >= 18 )

console.log("Maiores de idade?", valordezoito)
