const express = require('express');
const app = express()
const path = require('path')
const publicPath = path.resolve(__dirname,'./public')
// const viewsPath = path.resolve(__dirname,'./views')

app.use(express.static(publicPath))
// app.use(express.static(viewsPath))


app.listen(3000,() => {
    console.log("Server is ready in port 3000")
})

app.get('/', (req, res)=> {
    res.sendFile(path.resolve(__dirname,'./views/home.html'))
})

app.get('/register/', (req, res)=> {
    res.sendFile(path.resolve(__dirname,'./views/register.html'))
})

app.get('/login/', (req, res)=> {
    res.sendFile(path.resolve(__dirname,'./views/login.html'))
})