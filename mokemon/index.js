const express = require('express')

const app = express()

app.get('/',(req,res)=>{
    res.send('hola, que quieres hacer hoy?, estas de humor?')
    res.sendDate
})

app.listen(8080, ()=>{
    console.log('servidor en funcionamiento')
})