import React, {useEffect, useState} from 'react';
import Peer from 'peerjs';
import {v4 as uuid} from 'uuid';

const defaultId = uuid();

export const Connection = () => {
  const [connection, setConnection] = useState(null);
  const [peer, setPeer] = useState(null);

  useEffect(() => {
    const id = new URL(window.location).searchParams.get('id') || defaultId;
    const peer = new Peer(id);
    setPeer(peer);

    peer.on('connection', (conn) => {
      conn.on('data', (data) => {
        console.log(data);
      });

      conn.on('open', () => {
        console.log('Peer connected');
      });
    });
  }, []);

  const connect = () => {
    if (!peer) {
      console.error('No peers :(');
      return;
    }
    const connection = peer.connect('peak');

    connection.on('open', () => {
      console.log('Connected to peak');
    });

    setConnection(connection);
  };

  const disconnect = () => {};

  const send = () => {
    if (connection) {
      connection.send('HI!');
    }
  };

  return (
    <div>
      <button onClick={connect} disabled={connection}>
        Connect
      </button>
      <button onClick={disconnect} disabled={!connection}>
        Disconnect
      </button>
      <button onClick={send} disabled={!connection}>
        Send MIDI to peer
      </button>
    </div>
  );
};
