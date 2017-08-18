var request = require ('request')
var notify = require ('./js/notify.js')
var lp = require ('./js/lunoPrice.js')

particlesJS.load('particles-js', './js/particles.json', function() {
  console.log('callback - particles-js config loaded');
});


var addr = document.querySelector('.localstorage');
//hash = document.getElementById("hash")

//addr.addEventListener('keyCode === 13', () => {checkBTC()})

// clearAddr = () => {
//   // addr.value = '';
//   localStorage.removeItem('btcAddress');
//   //document.getElementById("hoosh").innerHTML = ''
// }

getBalance = (arr) => {

  //Get algo stats
  curr = arr.result.stats;

  //Get balance for each Algo
  currdata = curr.map(x => x.balance)

  //Sum all the balance of each Algo
  var sum = 0;
  for (x in currdata) {
    sum += currdata[x];
  }

  //Map value to id = "hash" in 10 decimal point
  updateSum = sum.toFixed(10) + ' BTC'
  document.getElementById("hash").innerHTML = updateSum ;

  sumsum = sum.toFixed(10)

  var ll = localStorage.getItem("lunoVal")
  //console.log(ll);
  var balanceMYR = ll * sum.toFixed(10)
  hash2.innerHTML = '(RM ' + balanceMYR.toFixed(2) + ')'
}

// 1CPTNVgT96pFaC1phiE7rtKpMvBC2NBJ6R

checkBTC = () => {
  request("https://api.nicehash.com/api?method=stats.provider&addr=" + btcadd.value, function(error, response, body) {

    //Parse data, convert all "number" to number
    body = JSON.parse(body,(k, v) => {return (typeof v === "object" || isNaN(v)) ? v : parseFloat(v);});

    //Log data
    //console.log(body);


    if ((!body.result.error)) {

      console.log("BTC Address checked");


      //Show balance
      getBalance(body);

      //Notify on every update
      //if (notifyMe){
      clipboard.writeText(sumsum)
      // notify("Current NiceHash balance",updateSum +' is copied to clipboard');
      //}

      hash.style.fontSize = '45px'
      hash.style.color = '#E6DCDB'
      hash.style.transition = 'all 1s ease-out'
      //document.getElementById("hoosh").innerHTML = 'Current NiceHash Balance'

    }
    else {
      console.log("Error : Incorrect BTC address specified.")

      hash.innerHTML = 'Incorrect BTC address specified.'
      hash.style.fontSize = '25px'
      hash.style.color = '#FF6766'
      hash.style.transition = 'all 1s ease-out'
    }

  });
};
//saveAddr = () => {localStorage.setItem('btcAddress', addr.value), checkBTC()}



// clearAddr();

//Check balance every 60 secs
setInterval(function() {
  checkBTC();
  console.log('Checking current price...');
}, 3600000);
