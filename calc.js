window.onload = (function(){
  document.getElementById('display').value = '';
});

var strNum = '';
var func;
var int;
var nextInt;
var result;

document.getElementById('button1').addEventListener('click', function(){
  strNum += this.value;
  int = Number(strNum);
  document.getElementById('display').value = int;
});
document.getElementById('button2').addEventListener('click', function(){
  strNum += this.value;
  int = Number(strNum);
  document.getElementById('display').value = int;
});
document.getElementById('button3').addEventListener('click', function(){
  strNum += this.value;
  int = Number(strNum);
  document.getElementById('display').value = int;
});
document.getElementById('button4').addEventListener('click', function(){
  strNum += this.value;
  int = Number(strNum);
  document.getElementById('display').value = int;
});
document.getElementById('button5').addEventListener('click', function(){
  strNum += this.value;
  int = Number(strNum);
  document.getElementById('display').value = int;
});
document.getElementById('button6').addEventListener('click', function(){
  strNum += this.value;
  int = Number(strNum);
  document.getElementById('display').value = int;
});
document.getElementById('button7').addEventListener('click', function(){
  strNum += this.value;
  int = Number(strNum);
  document.getElementById('display').value = int;
});
document.getElementById('button8').addEventListener('click', function(){
  strNum += this.value;
  int = Number(strNum);
  document.getElementById('display').value = int;
});
document.getElementById('button9').addEventListener('click', function(){
  strNum += this.value;
  int = Number(strNum);
  document.getElementById('display').value = int;
});
document.getElementById('button0').addEventListener('click', function(){
  strNum += this.value;
  int = Number(strNum);
  document.getElementById('display').value = int;
});

  document.getElementById('addButton').addEventListener('click', function(){
    if (Number.isInteger(nextInt) && result == undefined) {
      nextInt = func(nextInt, int);
      document.getElementById('display').value = nextInt;
    } else if (Number.isInteger(result)) {
      nextInt = result;
      document.getElementById('display').value = nextInt;
      result = undefined;
    }
    else {
      nextInt = int;
      document.getElementById('display').value = nextInt;
    }
      strNum = '';
    func = function (x, y) {
      return x + y;
    };
  });

  document.getElementById('subtractButton').addEventListener('click', function(){
    if (Number.isInteger(nextInt) && result == undefined) {
      nextInt = func(nextInt, int);
      document.getElementById('display').value = nextInt;
    } else if (Number.isInteger(result)) {
      nextInt = result;
      document.getElementById('display').value = nextInt;
      result = undefined;
    }
    else {
      nextInt = int;
      document.getElementById('display').value = nextInt;
    }
    strNum = '';
    func = function (x, y) {
    return x - y;
    }
  });

  document.getElementById('divideButton').addEventListener('click', function(){
    if (Number.isInteger(nextInt) && result == undefined) {
      nextInt = func(nextInt, int);
      document.getElementById('display').value = nextInt;
    } else if (Number.isInteger(result)) {
      nextInt = result;
      document.getElementById('display').value = nextInt;
      result = undefined;
    }
    else {
      nextInt = int;
      document.getElementById('display').value = nextInt;
    }
      strNum = '';
    func = function (x, y) {
    return x / y;
    }
  });

  document.getElementById('multiplyButton').addEventListener('click', function(){
    if (Number.isInteger(nextInt) && result == undefined) {
      nextInt = func(nextInt, int);
      document.getElementById('display').value = nextInt;
    } else if (Number.isInteger(result)) {
      nextInt = result;
      document.getElementById('display').value = nextInt;
      result = undefined;
    }
    else {
      nextInt = int;
      document.getElementById('display').value = nextInt;
    }
    strNum = '';
    func = function (x, y) {
    return x * y;
    }
  });

  document.getElementById('clearButton').addEventListener('click', function(){
    int = 0;
    result = undefined;
    func;
    nextInt = 0;
    strNum = '';
    document.getElementById('display').value = '';
  });

  document.getElementById('equalsButton').addEventListener('click', function(){
    result = func(nextInt, int);
    document.getElementById('display').value = result;
    nextInt = result;
    strNum = '';
  });
