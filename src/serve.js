const express = require('express')
const axios = require('axios')
const cors = require('cors')

const app = express()
app.use(cors())

app.get('/', async(req, res)=>{
    try {
        const { data } = await axios('https://api.chucknorris.io/jokes/random')
        return res.json(data)
        
    } catch (error) {
        console.log('Houve um erro '+error)
    }
})

const port = 9090
app.listen(port, ()=>{
    console.log('runing...')
})