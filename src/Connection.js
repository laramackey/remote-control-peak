import Peer from 'peerjs';
import {v4 as uuid} from 'uuid';

const defaultId = uuid();

const peerConnected = (connection, onMidiReceived) => {
  console.log('new connection');
  connection.on('data', (data) => {
    onMidiReceived(data);
  });

  connection.on('open', () => {
    console.log('Peer connected');
  });

  connection.on('error', (err) => {
    console.log(err);
  });

};

export const createConnection = (onMidiReceived) => {
  const id = new URL(window.location).searchParams.get('id') || defaultId;
  const peerId = (id === 'peak') ? `${id}-6837fff9-8481-4046-992a-235da95f01c8` : id;
  const peer = new Peer(peerId);
  console.log(`My ID = ${peerId}`);

  peer.on('connection', (conn) => peerConnected(conn, onMidiReceived));

  if (!peer) {
    console.error('No peers :(');
    return;
  }

  if (id === 'peak') {
    return {peerId};
  }

  let connection;

  const connect = () => {
    connection = peer.connect('peak-6837fff9-8481-4046-992a-235da95f01c8');
    connection.on('open', () => {
      console.log('Connected to peak');
    });
  };

  const send = (data) => {
    if (!connection) {
      connect();
    }

    if (connection) {
      connection.send(data);
    }
  };

  return {
    send,
    connect,
    id,
  };
};
