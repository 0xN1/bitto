var request = require('request');

function lunoPrice() {
  request("https://api.mybitx.com/api/1/ticker?pair=XBTMYR", function(error, response, body) {
    body = JSON.parse(body);
    lastTrade = body.last_trade
    // console.log(body);
    // console.log(lastTrade);
    localStorage.setItem("lunoVal", lastTrade)
    updatedLunoPrice = 'RM ' + lastTrade;
    lunoText.innerHTML = updatedLunoPrice
    notify("Current Luno Price", updatedLunoPrice);
  })
}

//Check balance every 10 mins
setInterval(function() {
  lunoPrice();
  console.log('Checking current Luno price...');
}, 600000);
