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

const urls = [
  'stun.l.google.com:19302',
  'stun1.l.google.com:19302',
  'stun2.l.google.com:19302',
  'stun3.l.google.com:19302',
  'stun4.l.google.com:19302',
  'stun.ekiga.net',
  'stun.ideasip.com',
  'stun.rixtelecom.se',
  'stun.schlund.de',
  'stun.stunprotocol.org:3478',
  'stun.voiparound.com',
  'stun.voipbuster.com',
  'stun.voipstunt.com',
  'stun.voxgratia.or'
]  

export const createConnection = (onMidiReceived) => {
  const id = new URL(window.location).searchParams.get('id') || defaultId;

  const peerId = (id === 'peak') ? `${id}-6837fff9-8481-4046-992a-235da95f01c8` : id;
  const peer = new Peer(peerId, {debug:2, iceServers: urls.map(url => {return {url}})});
  console.log(`My ID = ${peerId}`);

  peer.on('connection', (conn) => peerConnected(conn, onMidiReceived));

  if (!peer) {
    console.error('No peers :(');
    return;
  }

  if (id === 'peak') {
    return {id: peerId};
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
