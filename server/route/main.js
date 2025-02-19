const express = require('express')

const router = express.Router()


router.get('',(req,res)=>{
  const locals = {
    title : 'NodeJS bLOG',
    description : "Simple Blog Created With Node js , Express AND MongoDb"
  }
    res.render("index",{locals})
})


router.get('/about',(req,res)=>{
  const locals = {
    title : 'NodeJS About Blog',
    description : "About Simple Blog Created With Node js , Express AND MongoDb"
  }
  res.render("about",{locals})
})

  router.get('/contact',(req,res)=>{
    const locals = {
      title : 'NodeJS About Blog',
      description : "About Simple Blog Created With Node js , Express AND MongoDb"
    }
    res.render("contact",{locals})
  })
  

module.exports= router