// Show console.log in the HTML file
window.console = {
  log: function(str){
    var node = document.createElement("div");
    node.appendChild(document.createTextNode(str));
    document.getElementById("myLog").appendChild(node);
  }
}
console.log("JavaScript_Recursion: ");
console.log("                      ");
// JavaScript: Calculate the factorial of a number
function factorial(x) {

  if (x === 0) {
    return 1;
  } else {
    return x * factorial(x - 1);
  }
}
console.log("_________________________________________");
console.log("JavaScript: Calculate the factorial of a number :")
console.log(factorial(5));

//JavaScript: Get the integers in a range
var range = function(start_num, end_num) {
  if (end_num - start_num === 2) {
    return [start_num + 1]
  }else {
    var list = range(start_num, end_num - 1);
    list.push(end_num - 1);
    return list;
  }
}
console.log("_________________________________________");
console.log("JavaScript: Get the integers in a range :");
console.log(range(2, 9));

// JavaScript: Compute the sum of an array of integers
function ex4(arr){
return arr.reduce((a, b) => a + b);
}
console.log("_________________________________________");
console.log("JavaScript: Compute the sum of an array of integers :");
console.log(ex4([1, 2, 3, 4, 5, 6]));

// JavaScript: Compute the exponent of a number
var exponent = function(a, n) {
  if (n === 0) {
    return 1;
  }
  else {
    return a * exponent(a, n - 1);
  }
};
console.log("_________________________________________");
console.log("JavaScript: Compute the exponent of a number :");
console.log(exponent(4, 3));

// JavaScript: Get the first n Fibonacci numbers
var fibonacci_series = function(n) {
  if (n === 1) {
    return [0, 1];
  }
  else {
    var s = fibonacci_series(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};
console.log("_________________________________________");
console.log("JavaScript: Get the first n Fibonacci numbers :");
console.log(fibonacci_series(8));

// JavaScript: Check whether a number is even or not
function is_even_recursion(number)
{
  if (number < 0)
  {
    number = Math.abs(number);
  }
  if (number===0)
  {
    return true;
  }
  if (number===1)
  {
    return false;
  }
  else
  {
    number = number - 2;
    return is_even_recursion(number);
  }
}
console.log("_________________________________________");
console.log("JavaScript: Check whether a number is even or not :");
console.log(is_even_recursion(234)); //true
console.log(is_even_recursion(-45)); // false
console.log(is_even_recursion(-45)); // false

// JavaScript: Binary search using recursion
Array.prototype.br_search = function (target)
{
  var half = parseInt(this.length / 2);
  if (target === this[half])
  {
    return half;
  }
  if (target > this[half])
  {
    return half + this.slice(half,this.length).br_search(target);
  }
  else
  {
    return this.slice(0, half).br_search(target);
  }
};

l= [0,1,2,3,4,5,6];
console.log("_________________________________________");
console.log("JavaScript: Binary search using recursion :");
console.log(l.br_search(5));

// JavaScript: Marge sort - recursion
Array.prototype.merge_Sort = function () {
  if (this.length <= 1)
  {
    return this;
  }

  var half = parseInt(this.length / 2);
  var left = this.slice(0, half).merge_Sort();
  var right = this.slice(half,     this.length).merge_Sort();
  var merge = function (left, right)
  {
  var arry = [];
  while (left.length > 0 && right.length > 0)
  {
    arry.push((left[0] <= right[0]) ? left.shift() : right.shift());
  }
    return arry.concat(left).concat(right);
  };

  return merge(left, right);
};

var a = [34,7,23,32,5,62];
console.log("_________________________________________");
console.log("JavaScript: Marge sort - recursion :");
console.log(a.merge_Sort());
