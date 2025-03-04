function claculateTip(){
  let price = document.getElementById('price').value;
  let tip = document.getElementById('tip').value;
  let noPeople = document.getElementById('no-people').value;
  let result = document.getElementById('result');
  price = Number(price);
  tip = Number(tip);
  noPeople = Number(noPeople);

  const totalPriceBeforeTip = price;
  const totalPriceWithTip = ((tip/100) * price) + price;
  const tipPerPerson = tip/noPeople;
  const pricePerPerson = totalPriceWithTip / noPeople;

  if(price === 0 || tip === 0 || noPeople === 0){
    result.innerHTML = 'Please fill all the input field';
  } else if (noPeople === 1){
      result.innerHTML = `
      <li>Tip: ${tip}% </li>
      <li>Price Before Tip: ₦${totalPriceBeforeTip}</li>
      <li>Price After Tip: ₦${totalPriceWithTip} </li>
    `
  } else{
    result.innerHTML = `
    <li>Tip: ${tip}% </li>
    <li>Price Before Tip: ₦${totalPriceBeforeTip.toFixed(2)}</li>
    <li>Price After Tip: ₦${totalPriceWithTip.toFixed(2)} </li>
    <li>Tip per Person: ${tipPerPerson.toFixed(2)}% </li>
    <li>Price Per Person: ₦${pricePerPerson.toFixed(2)} </li>
  `
  }
}

function clear(){
  document.getElementById('price').value = '';
  document.getElementById('tip').value = '';
  document.getElementById('no-people').value = '1';
}

document.getElementById('calculate').addEventListener('click', (e) =>{
  e.preventDefault();
  claculateTip();
});

document.getElementById('clear').addEventListener('click',(e) =>{
  e.preventDefault();
  clear();
})