require ('dotenv').config()
const express = require('express')
const app = express()

// LISTEN FOR PORT CONNECTION FROM '.env' FILE
app.listen(process.env.PORT)