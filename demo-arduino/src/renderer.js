let Readable = require('stream').Readable;
let util = require('util');
let five = require('johnny-five');

util.inherits(ArduinoStream, Readable)  


function ArduinoStream(opt) {  

  Readable.call(this, opt)
}

ArduinoStream.prototype._read = function(data) { }  

process.__defineGetter__('stdin', function() {  

  if (process.__stdin) 
    return process.__stdin;
 
  process.__stdin = new ArduinoStream()
  
  return process.__stdin;

});

let board = new five.Board();
let btnOn = document.getElementById('btnOn');
let btnOff = document.getElementById('btnOff');



document.body.style.backgroundColor = '#000000';

board.on('ready', function() {
  

    var array = new five.Leds([3,5,6]);
    btnOn.addEventListener('click', () => {

      array.pulse();

    });

   btnOff.addEventListener('click', () => {
     
      array.stop().off();
  
   })
});