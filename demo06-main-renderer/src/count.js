module.exports = function countdown(tick) {
    
   let count = 5;

   let time = setInterval(() => {

        tick(count--);
        if(count === -1)
            clearInterval(time);
    }, 1000)
}