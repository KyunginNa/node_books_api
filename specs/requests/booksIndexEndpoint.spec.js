const app = require('../../server')
const supertest = require('supertest')
const { expect, jsonResponse } = require('../specHelper')
const fs = require('fs')

let server, request, response

before((done) => {
  server = app.listen(done)
  request = supertest.agent(server)
})

after((done) => {
  server.close(done)
})

describe('GET /books', () => {
  beforeEach(async () => {
    response = await request.get('/books')
  })

  it('is expected to respond with status 200', () => {
    expect(response.status).to.equal(200)
  })

  it('is expected to return a collection of books', () => {
    let expectedBody = JSON.parse(
      fs.readFileSync(
        process.cwd() + '/specs/fixtures/bookIndex.json'
      ).toString()
    )
    expect(jsonResponse(response)).to.equal(JSON.stringify(expectedBody))
  })
})
