import Peer from 'peerjs';
import {v4 as uuid} from 'uuid';

const defaultId = uuid();

const peerConnected = (connection) => {
  connection.on('data', (data) => {
    console.log(data);
  });

  connection.on('open', () => {
    console.log('Peer connected');
  });
};

export const createConnection = () => {
  const id = new URL(window.location).searchParams.get('id') || defaultId;
  const peer = new Peer(id);
  console.log(`My ID = ${id}`);

  peer.on('connection', peerConnected);

  if (!peer) {
    console.error('No peers :(');
    return;
  }

  if (id === 'peak') {
    return;
  }

  let connection;

  const connect = () => {
    connection = peer.connect('peak');
    connection.on('open', () => {
      console.log('Connected to peak');
    });
  };

  const send = (data) => {
    if (connection) {
      connection.send(data);
    }
  };

  return {
    send,
    connect,
  };
};
