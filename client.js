const net = require('net');
const { IP, PORT } = require('./constants');

/**
 * Establishes connection with the game server
 */
const connect = function(data) {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  
  conn.on('data', (data) => {
    console.log(data);
  })
  conn.on('connect', () => {
    console.log('Successfully connected to game server', )
  })
  conn.on('connect', () => {
    conn.write('Name: ZBM');
  });

  conn.on('data', (data) => {
    conn.write("new message from server", data);
  });
  
  return conn;
}

module.exports =  connect 
 