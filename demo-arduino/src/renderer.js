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
let imagestatus = document.getElementById('img-status');

btnOff.disabled = true;
document.body.style.backgroundColor = '#000000';

board.on('ready', function() {
  
    var led = new five.Led(13);

    btnOn.addEventListener('click', () => {
  
      led.on();
      
      btnOn.disabled = true;
      btnOff.disabled = false;
      imagestatus.style.backgroundImage = "url('img/light-bulb.jpg')"

   });

   btnOff.addEventListener('click', () => {
     
      led.off();
      btnOn.disabled = false;
      btnOff.disabled = true;
      imagestatus.style.backgroundImage = "url('img/ghost-pacman.png')";
  
   })
});