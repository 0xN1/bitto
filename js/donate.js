const {clipboard} = require('electron')

function donate() {
  clipboard.writeText('1nero1iiDRH2wznsWYRi1gg1T5ncPfhkT')
  alert('Thank you for your good intention! I will do my best to continue doing this! Donate if you want to support me. :) My BTC address : 1nero1iiDRH2wznsWYRi1gg1T5ncPfhkT ')
  notify('Thank you!', 'Donation address copied to clipboard')
}
