function claculateTip(){
  //Declare the variables
  let price = document.getElementById('price').value;
  let tip = document.getElementById('tip').value;
  let noPeople = document.getElementById('no-people').value;
  let result = document.getElementById('result');
  //convert the 'price', 'tip', and 'noPeople' from string to number 
  price = Number(price);
  tip = Number(tip);
  noPeople = Number(noPeople);

  //Declare additional variables

  //Assign the value of price to totalPriceBeforeTip
  const totalPriceBeforeTip = price;

  //Divide the tip by 100 and multiply it by price and then add price to it
  const totalPriceWithTip = ((tip/100) * price) + price;
  //Divide tip by noPeople
  const tipPerPerson = tip/noPeople;
  //Divide totalPriceWithTip by noPeople
  const pricePerPerson = totalPriceWithTip / noPeople;

  //Check if any of the input field is 0 and throw an error
  if(price === 0 || tip === 0 || noPeople === 0){
    //Error message to be thrown
    result.innerHTML = 'Please fill all the input field';
  } 
  //Else if the noPeople is 1 run this
  else if (noPeople === 1){
      result.innerHTML = `
      <li>Tip: ${tip}% </li>
      <li>Price Before Tip: ₦${totalPriceBeforeTip}</li>
      <li>Price After Tip: ₦${totalPriceWithTip} </li>
    `
  } 
  // and lastly if the two condition above is false do this
  else{
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
  //Get the value of price and set it to empty string
  document.getElementById('price').value = '';
  //Get the value of tip and set it to empty string
  document.getElementById('tip').value = '';
  //Get the value of no-people and set it to 1
  document.getElementById('no-people').value = '1';
  //GEt the #result and set it to null
  document.getElementById('result').innerHTML = '';
}


//Add event listener to the calculate button
document.getElementById('calculate').addEventListener('click', (e) =>{
  e.preventDefault();
  claculateTip();
});

//Add event listener to the clear button
document.getElementById('clear').addEventListener('click',(e) =>{
  e.preventDefault();
  clear();
})