var request = require ('request');

function lunoPrice(){
    request("https://api.mybitx.com/api/1/ticker?pair=XBTMYR", function(error, response, body) {
    body = JSON.parse(body);
    lastTrade = body.last_trade
    // console.log(body);
    // console.log(lastTrade);
    localStorage.setItem("lunoVal", lastTrade)
    lunoText.innerHTML = 'RM '+ lastTrade;
  })
}

//Check balance every 60 secs
setInterval(function() {
  lunoPrice();
  console.log('Checking current Luno price...');
}, 600000);
