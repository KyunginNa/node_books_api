const WebSocket = require('ws')
const wsServer = new WebSocket.Server({ port: 8080 })

wsServer.on('connection', (ws, request) => {
  ws.on('message', (message) => {
    console.log(`Received: ${message}`)
  })
  ws.send('You are connected!')
})

module.exports = { wsServer, WebSocket }
