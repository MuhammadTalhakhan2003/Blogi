require('dotenv').config();
const express = require('express')
const expressLayout = require('express-ejs-layouts')




const app = express()

const PORT =  5200 || process.env.PORT;



//Templating Engine 
app.use(expressLayout)

app.set('layout','./layouts/main')

app.set('view engine','ejs')

app.use(express.static('public'))


app.use('/',require('./server/route/main'))

app.use('/about',require('./server/route/main'))


app.use('/contact',require('./server/route/main'))


app.listen(PORT,()=>{
    console.log(`App Listen on Port at  http://localhost:${PORT}`)
})