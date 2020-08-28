var mqtt = require('mqtt')

/*
*     Thingsup MQTT Service is Available on below Server
*     Host: mqtt.thingsup.io
*     Port: 1883(Secure MQTT)/ 8083(Secure MQTT over Websockets)
*/

var client  = mqtt.connect('mqtts://mqtt.thingsup.io:1883',
{
    username:"<AccountID>:<Name you specified>", //e.g. 3p309xhfhfhfhf:TestDevice1
    password:"<Your MQTT Password>"              //e.g. Test12345
})

/*
* All Topics Must Start with /<AccountID>/
*/

client.on('connect', function () {
  console.log("Connected")
  client.subscribe('/<AccountID>/Test', function (err) {
    if (!err) {
      client.publish('/<AccountID>/Test', 'Hello mqtt')
    }
  })
})

client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString())
  client.end()
})

client.on('error', function (error) {
  // message is Buffer
  console.log(error.toString());
})

client.on('close', function (error) {
  // message is Buffer
  console.log("Connection Closed");
})
