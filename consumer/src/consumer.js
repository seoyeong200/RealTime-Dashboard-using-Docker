'use strict'
// 카프카
const kafka = require('kafka-node');

const Consumer = kafka.Consumer,
  client = new kafka.KafkaClient({kafkaHost: 'localhost:9092'}),
  consumer = new Consumer(
  client, [ { topic: 'processed'} ], { autoCommit: false });

  // 카프카 토픽 정보 확인
// const admin = new kafka.Admin(client);
// admin.listTopics((err, res) => {
//     console.log('topics', res);
// });


// 소켓
const http = require('http')
const path = require('path')
const EventEmitter = require('events')
const express = require('express')
const socketio = require('socket.io')
const port = process.env.PORT || 3000

const app = express()
const server = http.createServer(app)
const io = socketio(server)
const events = new EventEmitter()

app.use(express.static(path.join(__dirname)))
  

io.on('connection', socket => {
    console.log("socket connected");
    // 메시지 들어오는 경우에만 출력 / 전달(트리거가 토픽에 새 메시지 들어오는 것)
  consumer.on('message', function (message) {
      socket.emit('event', message.value);
      console.log('message passed on');
    });
});

server.listen(port, () => console.log(`Listening on port ${port}`))