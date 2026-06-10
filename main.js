var billInput = document.querySelector('#billInput');
var tipInput = document.querySelector('#tipInput');
var calcOutput = document.querySelector('.calcOutput');
var total = document.querySelector('#total');
calcOutput.addEventListener("click",function()
{
  var billValue = Number(billInput.value);
  var tipPercent = Number(tipInput.value);
  var tipValue = billValue * tipPercent / 100;
  var totalValue = billValue + tipValue;
    total.innerHTML = totalValue;
});
