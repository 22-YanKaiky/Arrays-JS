console.log([1, 2, 3, 4, NaN, 5, 6, 7, 8].includes(NaN))

const peoples = ["Yan", "Kaiky", "Augusto", "dos Santos", "Miles", "Morales"]

console.log(peoples.includes("Yan"))

const filterUsers = [
   {id: 1, name: "Yan", idade: 18, profissao: "FullStack Developer Jr"},
   {id: 2, name: "Kaiky", idade: 19, profissao: "Programmer Jr"},
   {id: 3, name: "Augusto", idade: 20, profissao: "UI/ UX"},
   {id: 4, name: "dos Santos", idade: 21, profissao: "Developer FullStack Senior"},
   {id: 5, name: "Yann", idade: 43, profissao: "Programmer Trainee"},
   {id: 6, name: "Lucass", idade: 15, profissao: "Data Analysis"},
]

const filtrar = filterUsers.filter( pessoa => pessoa.id > 2 )

console.log(filtrar)

const filtrarNomes = filterUsers.filter( nome => nome.name.includes("an"))

console.log(filtrarNomes)