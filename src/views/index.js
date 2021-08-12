async function getApi(){    
    try {        
        const apiPhrase = await fetch('http://localhost:9090/')
        const showPhrase = await apiPhrase.json()
        
        //console.log(showPhrase)

        const Phrase = showPhrase.value

        const res = document.getElementById('res')
        res.innerHTML = Phrase

    } catch (error) {
        console.log('Houve um erro '+error)
    }
}

getApi()