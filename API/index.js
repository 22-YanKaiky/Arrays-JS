async function getPeople() {
    const response = await fetch( 'https://randomuser.me/api/?results=10' )

    return response.json();
}

//Pegar da API Somente as Mulheres

getPeople().then( data => {
    const res = data.results

    const filtrargenero = res.filter( data => data.gender.includes("female"))
    
    //console.log(filtrargenero)
})

//Trabalhando com Dados

getPeople().then( data => {
    const result = data.results
    const people = []

    for (const p of result) {
        people.push({
            "Nome": `${p.name.first} ${p.name.last}`,
            "Email": p.email,
            "Gênero": p.gender,
            "Idade": p.dob.age,
            "Data de Nascimento": p.dob.date
        })

        console.table(people.filter( idade => idade.Idade >= 30 ))
    }
})