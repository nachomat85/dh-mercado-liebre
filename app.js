const express = require('express');
const app = express()
const path = require('path')

app.listen(3000,() => {
    console.log("Server is ready in port 3000")
})