/* eslint-disable no-multi-assign */
import { io } from 'socket.io-client';

const SERVER = import.meta.env.VITE_SERVER;

export default () => {
  let peerConnection = {};
  const config = {
    iceServers: [
      {
        urls: ['stun:stun.l.google.com:19302'],
      },
    ],
  };

  const socket = io.connect(SERVER, {
    origin: SERVER,
    'Access-Control-Allow-Origin': SERVER,
  });
  const video = document.querySelector('#watchVideo');

  socket.on('offer', (id, description) => {
    peerConnection = new RTCPeerConnection(config);
    peerConnection
      .setRemoteDescription(description)
      .then(() => peerConnection.createAnswer())
      .then((sdp) => peerConnection.setLocalDescription(sdp))
      .then(() => {
        socket.emit('answer', id, peerConnection.localDescription);
      });
    peerConnection.ontrack = (event) => {
      // eslint-disable-next-line prefer-destructuring
      video.srcObject = event.streams[0];
    };
    peerConnection.onicecandidate = (event) => {
      if (event.candidate) {
        socket.emit('candidate', id, event.candidate);
      }
    };
  });

  socket.on('candidate', (id, candidate) => {
    peerConnection
      .addIceCandidate(new RTCIceCandidate(candidate))
      // eslint-disable-next-line no-console
      .catch((e) => console.error(e));
  });

  socket.on('connect', () => {
    socket.emit('watcher');
  });

  socket.on('broadcaster', () => {
    socket.emit('watcher');
  });

  window.onunload = window.onbeforeunload = () => {
    socket.close();
    peerConnection.close();
  };
};
