const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const generateRubbish = require('./generate_rubbish')
const app = express()
const port = 3000

const hb = exphbs.create({
  defaultLayout: 'main',
  helpers: {
    eq: function (v1, v2) { return (v1 === v2) }
  }
})

app.engine('handlebars', hb.engine)
app.set('view engine', 'handlebars')


app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const target = req.body.radios
  const rubbish = generateRubbish(target)
  res.render('index', { rubbish, target })
})

app.listen(port, (req, res) => {
  console.log(`Express app is listening on ${port}.`)
})
