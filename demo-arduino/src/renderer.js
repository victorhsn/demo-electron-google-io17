let Readable = require('stream').Readable;
let util = require('util');
let five = require('johnny-five');

util.inherits(ArduinoStream, Readable)  


function ArduinoStream(opt) {  

  console.log("STREAM OPT", opt);
  Readable.call(this, opt)

}

ArduinoStream.prototype._read = function(data) {

  console.log(data);
}  


process.__defineGetter__('stdin', function() {  

  if (process.__stdin) 
    return process.__stdin;
 
  process.__stdin = new ArduinoStream()
  
  return process.__stdin;

});

let board = new five.Board();

board.on('ready', function() {
  
    var led = new five.Led(13);

    document.getElementById('ligar').addEventListener('click', () => {

      led.on();
    });

    document.getElementById('desligar').addEventListener('click', () => {
      led.off();
    });
});