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
  } else{
    result.innerHTML = `
    <li>Price Before Tip: ${totalPriceBeforeTip}</li>
    <li>Price Before Tip: ${totalPriceBeforeTip}</li>
    <li>Price After Tip: ${totalPriceWithTip} </li>
    <li>Tip: ${tip} </li>
    <li>Tip per Person: ${tipPerPerson} </li>
    <li>Price Per Person: ${pricePerPerson} </li>
    <li>Price Before Tip: ${price} </li>
  `
  }
}

document.getElementById('calculate').addEventListener('click', (e) =>{
  e.preventDefault();
  claculateTip();
});