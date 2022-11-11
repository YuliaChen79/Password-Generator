const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const generatePassword = require('./generate_password')
const port = 3000

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting body-parser
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const options = req.body
  const password = generatePassword(options)
  res.render('index', { password , options })  
})

app.listen(port, () => {
  console.log(`Express app listening on port ${port}.`)
})