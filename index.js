fetch('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries')
    .then(res => res.json())
    .then(data => {
        /* console.log(data.data[0].country) */
        data.data.forEach(element =>{
            let data = document.getElementById('parent')
            let datadiv = document.createElement('div')
            datadiv.setAttribute('class','cards')


            let name = document.createElement('h2')
            name.innerText = "Country Name:" + element.country
            datadiv.append(name)
            data.append(datadiv)


            let id = document.createElement('h2')
            id.innerText = "id:"+ element.id
            datadiv.append(id)
            data.append(datadiv)


            let rank = document.createElement('h2')
            rank.innerText ="Rank:"+ element.Rank
            datadiv.append(rank)
            data.append(datadiv)


            let population = document.createElement('h2')
            population.innerText ="population:"+ element.population
            datadiv.append(population)
            data.append(datadiv)
        })
    })