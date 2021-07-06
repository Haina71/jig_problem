var height = document.getElementById('height-input');
var weight = document.getElementById('weight-input');
var button = document.getElementById('button-submit');

var output = document.getElementById('bmi-output');

var calcBmi = function () {
  var h_value = height.value;
  var w_value = weight.value;
  h_value /= 100;
  var bmi = w_value / (h_value * h_value);
  bmi = Math.floor(bmi * 100) / 100;
}

button.addEventListener('click', calcBmi);
