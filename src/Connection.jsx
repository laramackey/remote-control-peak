import React, {useState} from 'react';

export const Connection = () => {
  const [localConnection, setLocalConnection] = useState(null);
  const [remoteConnection, setRemoteConnection] = useState(null);
  const [sendChannel, setSendChannel] = useState(null);
  const [receiveChannel, setReceiveChannel] = useState(null);
  const [isConnected, setConnected] = useState(false);

  const handleSendChannelStatusChange = () => {
    setConnected(sendChannel && sendChannel.readyState === 'open');
  };

  const handleReceiveMessage = (event) => {
    console.log(`Received ${event.data}`);
  };

  const handleReceiveChannelStatusChange = () => {
    if (receiveChannel) {
      console.log(
        "Receive channel's status has changed to " + receiveChannel.readyState
      );
    }
  };

  const receiveChannelCallback = (event) => {
    const receiveChannel = event.channel;
    receiveChannel.onmessage = handleReceiveMessage;
    receiveChannel.onopen = handleReceiveChannelStatusChange;
    receiveChannel.onclose = handleReceiveChannelStatusChange;
    setReceiveChannel(receiveChannel);
  };

  const handleAddCandidateError = () => {
    console.error('addICECandidate failed!');
  };

  const handleCreateDescriptionError = (error) => {
    console.error('Unable to create an offer: ' + error.toString());
  };

  const connect = () => {
    const localConnection = new RTCPeerConnection();

    const sendChannel = localConnection.createDataChannel('sendChannel');
    sendChannel.onopen = handleSendChannelStatusChange;
    sendChannel.onclose = handleSendChannelStatusChange;

    const remoteConnection = new RTCPeerConnection();
    remoteConnection.ondatachannel = receiveChannelCallback;

    localConnection.onicecandidate = (e) =>
      !e.candidate ||
      remoteConnection
        .addIceCandidate(e.candidate)
        .catch(handleAddCandidateError);

    remoteConnection.onicecandidate = (e) =>
      !e.candidate ||
      localConnection
        .addIceCandidate(e.candidate)
        .catch(handleAddCandidateError);

    localConnection
      .createOffer()
      .then((offer) => localConnection.setLocalDescription(offer))
      .then(() =>
        remoteConnection.setRemoteDescription(localConnection.localDescription)
      )
      .then(() => remoteConnection.createAnswer())
      .then((answer) => remoteConnection.setLocalDescription(answer))
      .then(() =>
        localConnection.setRemoteDescription(remoteConnection.localDescription)
      )
      .catch(handleCreateDescriptionError);

    setLocalConnection(localConnection);
    setRemoteConnection(remoteConnection);
    setSendChannel(sendChannel);
  };

  const disconnect = () => {
    if (sendChannel) {
      sendChannel.close();
    }

    if (receiveChannel) {
      receiveChannel.close();
    }

    if (localConnection) {
      localConnection.close();
    }

    if (remoteConnection) {
      remoteConnection.close();
    }

    setSendChannel(null);
    setReceiveChannel(null);
    setLocalConnection(null);
    setRemoteConnection(null);
  };

  const sendMidi = () => {
    sendChannel.send('Hello?');
  };

  return (
    <div>
      <button onClick={connect} disabled={isConnected}>
        Connect
      </button>
      <button onClick={disconnect} disabled={!isConnected}>
        Disconnect
      </button>
      <button onClick={sendMidi} disabled={!isConnected}>
        Send MIDI to peer
      </button>
    </div>
  );
};
