function tota() {
  var tot = sell.value * btc.value - buy.value * btc.value;
  var nuTot = parseFloat(tot);
  nuTot = nuTot.toFixed(2);
  if(!null){
    pr.innerHTML = nuTot;
  }
}
