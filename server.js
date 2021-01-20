const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const { booksController } = require('./booksController')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app
  .route('/books')
  .get(booksController.index)
  .post(booksController.create)

app
  .route('/books/:id')
  .get(booksController.show)
  .delete(booksController.delete)

app.listen(3001, () => {
  console.log('Server is up and running!')
})
