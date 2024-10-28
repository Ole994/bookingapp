// server.cjs
const WebSocket = require('ws'); // Bruk `require` for å importere WebSocket i CommonJS

const server = new WebSocket.Server({ port: 8080 });

server.on('connection', (socket) => {
  console.log('Ny WebSocket-tilkobling');

  // Send en melding til klienten når den kobler til
  socket.send(JSON.stringify({ message: 'Velkommen til WebSocket-serveren!' }));

  // Håndter meldinger fra klienten
  socket.on('message', (message) => {
    console.log('Melding mottatt fra klient:', message);
  });

  // Håndter når klienten kobler fra
  socket.on('close', () => {
    console.log('Klienten koblet fra');
  });
});

console.log('WebSocket-server kjører på ws://localhost:8080');

