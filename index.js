const io = require('socket.io')(3000);

let adidas = 10;
let nike = 10;
let leetify = 1000;
function repeat() { 
    adidas = stockValue(adidas)
    nike = stockValue(nike)
    leetify = stockValue(leetify)
    io.emit('stock_nike', nike)
    io.emit('stock_adidas', adidas)
    //console.log(adidas + " adidas")
    //console.log(nike + " nike")
    //console.log(leetify + " leetify")
}
setInterval(repeat, 2000)

io.on('connect', socket => {
    socket.on('login', (message) => {
        console.log(message)
    })
})


return
function stockValue(oldvalue) {
    let goUp = Math.round(Math.random());
    if (goUp ==  1 || oldvalue < 1.4) {return oldvalue * ((Math.random() + 2) / 200 + 1);}
    return oldvalue * (1 - ((Math.random() + 2) / 202.2));
}