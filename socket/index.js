const io = require('socket.io')(8900, {
  cors: {
    origin: 'http://localhost:3000',
  },
});

let users = [];
const addUser = (userId, socketId) => {
  console.log('id ' + socketId);
  !users.some((user) => user.userId === userId) &&
    users.push({ userId, socketId });
};

const removeUser = (socketId) => {
  users = users.filter((user) => user.socketId !== socketId);
};

const getUser = (userId) => {
  // console.log(userId);

  return users.find((user) => user.userId === userId);
};

io.on('connection', (socket) => {
  //when ceonnect
  console.log('a user connected.');

  //take userId and socketId from user
  socket.on('addUser', (userId) => {
    addUser(userId, socket.id);
    io.emit('getUsers', users);
  });

  //send and get message
  socket.on('sendMessage', async ({ senderId, receiverId, text }) => {
    try {
      console.log(JSON.stringify(senderId, null, 2));
      const user = await getUser(senderId);
      console.log(user + ' a ueserrrrrrrrrrrrr');
      // Object(user).hasOwnProperty('socketId')
      //   ? console.log('contains')
      //   : console.log('does not contain');
      // console.log(user.socketId);

      await io.to(user.socketId).emit('getMessage', {
        senderId,
        text,
      });
    } catch (error) {
      console.log(error);
    }
  });

  //when disconnect
  socket.on('disconnect', () => {
    console.log('a user disconnected!');
    removeUser(socket.id);
    io.emit('getUsers', users);
  });
});
