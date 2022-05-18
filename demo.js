const express = require('express')
const app = express()
const port = 3000
const fs=require('fs')

const path=require("path");

//express specific stuff
app.use('/static',express.static('static'))
app.use(express.urlencoded({extended:true}))

//pug specific stuff
app.set('view engine','pug')
app.set('views',path.join(__dirname,'views'))


app.get('/', (req, res) => {
    const con="this is best content on net use it wisely"
    const params={'title':"pubg is best game","content":con}
  res.status(200).render('demo.pug',params)
})
app.post('/', (req, res) => {

  age=req.body.age
  gender=req.body.gender
  address=req.body.address
  more=req.body.more
  let outputowrite=`this is the top and class is ${age}`
  fs.writeFileSync('output.txt',outputowrite)
  console.log(age)
  const con="this is best content on net use it wisely"
  const params={'message':'form has been submitted succesfully'}
res.status(200).render('demo.pug',params)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})