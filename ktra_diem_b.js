function calculateSum() {
    var num1 = parseInt(document.getElementById('number1').value);
    var num2 = parseInt(document.getElementById('number2').value);
    var sum = num1 + num2;
    document.getElementById('result').value ="Tổng: "+ sum;
  }
  
  function calculateDifference() {
    var num1 = parseInt(document.getElementById('number1').value);
    var num2 = parseInt(document.getElementById('number2').value);
    var difference = num1 - num2;
    document.getElementById('result').value ="Hiệu: "+ difference;
  }
  