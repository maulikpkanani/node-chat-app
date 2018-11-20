var socket = io();
socket.on('connect', () => {
  console.log('Connected to server');

  socket.emit('createMessage', {
    from: 'mak',
    text: 'Hey this is mak'
  });
});

socket.on('disconnect', () => {
  console.log('Disconnected from server');
});

socket.on('newMessage', function(message) {
  console.log('newMessage', message);
});
