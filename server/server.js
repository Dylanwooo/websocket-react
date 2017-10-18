/**
 * Created by Dylanwoo on 2017/10/18.
 */

let WebSocketServer = require('ws').Server,
    wss = new WebSocketServer({port:3002});
wss.on('connection',function (ws) {
    console.log('client connected');
    ws.on('message',function (message) {
        console.log(message);
    })
});