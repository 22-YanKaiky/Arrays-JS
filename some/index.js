const array = ["mussarela", "marguerita", "portuguesa", "calabresa", "7 queijos"]

const pizzas = array.find( piz => piz.startsWith( "m" ) )

console.log(pizzas)

const arrayFrutas = ["pêra",
   {name: "maçã", quantity: 1},
   {name: "uva", quantity: 2},
   {name: "morango", quantity: 2},
   {name: "laranja", quantity: 5},
]

const fruta = arrayFrutas.find(fru => fru.quantity == 2)

console.log(fruta)