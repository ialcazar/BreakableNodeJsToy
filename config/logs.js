/**
  Basic logging system
*/
var fs = require("fs");
var ENCODING = "utf8";

exports.log = function (message) {

  var path = "./logs/access_log";
  var now = new Date();
  var dateAndTime = now.toUTCString();
  stream = fs.createWriteStream(path, {
    'flags': 'a+',
    'encoding': 'utf8',
    'mode': 0644
  });

  stream.write(dateAndTime + " -- ", ENCODING);
  stream.write(message+"\n",ENCODING);
  stream.end();
}