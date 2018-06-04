// Show console.log in the HTML file
window.console = {
  log: function(str){
    var node = document.createElement("div");
    node.appendChild(document.createTextNode(str));
    document.getElementById("myLog").appendChild(node);
  }
}
console.log("JavaScript_Math: ");
console.log("                      ");
// Convert a number from one base to another
var base_convert = function(number, initial_base, change_base) {
   if ((initial_base && change_base) <2 || (initial_base && change_base)>36)
    return 'Base between 2 and 36';

    return parseInt(number + '', initial_base)
    .toString(change_base);
}
console.log("_________________________________________");
console.log("Convert a number from one base to another :");
console.log(base_convert('E164',16,8));
console.log(base_convert(1000,2,8));

// Convert a binary number to a decimal number
function bin_to_dec() {
  var bstr = +document.getElementById("number_bin_to_dec").value;
    document.getElementById("result_bin_to_dec").innerHTML = "The result is : " + parseInt((bstr + '')
    .replace(/[^01]/gi, ''), 2);
}

// Convert a decimal number to binary, hexadecimal or octal number
dec_to_bho  = function(n, base) {

    if (n < 0) {
      n = 0xFFFFFFFF + n + 1;
     }
switch (base)
{
case 'B':
return parseInt(n, 10).toString(2);
break;
case 'H':
return parseInt(n, 10).toString(16);
break;
case 'O':
return parseInt(n, 10).toString(8);
break;
default:
return("Wrong input.........");
}
}
console.log("_________________________________________");
console.log("Convert a decimal number to binary, hexadecimal or octal number :");
console.log(dec_to_bho(120,'B'));
console.log(dec_to_bho(120,'H'));
console.log(dec_to_bho(120,'O'));

// Generate a random integer
rand = function(min, max) {
  if (min==null && max==null)
    return 0;

  if (max == null) {
      max = min;
      min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
  };
 console.log("_________________________________________");
 console.log("Generate a random integer :");
 console.log(rand(20,1));
 console.log(rand(1,10));
 console.log(rand(6));
 console.log(rand());

// Format a number up to specified decimal places
function decimals(n, d) {
 if ((typeof n !== 'number') || (typeof d !== 'number'))
   return false;
    	n = parseFloat(n) || 0;
	return n.toFixed(d);
	}
console.log("_________________________________________");
console.log("Format a number up to specified decimal places :");
console.log(decimals(2.100212, 2));
console.log(decimals(2.100212, 3));
console.log(decimals(2100, 2));

// Find the highest value in an array
function max(input) {
     if (toString.call(input) !== "[object Array]")
       return false;
  return Math.max.apply(null, input);
	}
console.log("_________________________________________");
console.log("Find the highest value in an array :");
console.log(max([12,34,56,1]));
console.log(max([-12,-34,0,-56,-1]));

// Find the lowest value in an array
function min(input) {
     if (toString.call(input) !== "[object Array]")
       return false;
  return Math.min.apply(null, input);
	}
console.log("_________________________________________");
console.log("Find the highest value in an array :");
console.log(min([12,34,56,1]));
console.log(min([-12,-34,0,-56,-1]));

// Greatest common divisor (gcd) of two integers
function gcd_two_numbers(x, y) {
  var x = +document.getElementById("number_gcd_two_numbers").value;
  var y = +document.getElementById("number2_gcd_two_numbers").value;
  if ((typeof x !== 'number') || (typeof y !== 'number'))
    document.getElementById("result_gcd_two_numbers").innerHTML = "The result is : " + false;
  x = Math.abs(x);
  y = Math.abs(y);
  while(y) {
    var t = y;
    y = x % y;
    x = t;
  }
  document.getElementById("result_gcd_two_numbers").innerHTML = "The result is : " + x;
}

// Find the Greatest Common Divisor or GCD of more than 2 integers
function gcd_more_than_two_numbers(input) {
  if (toString.call(input) !== "[object Array]")
        return  false;
  var len, a, b;
	len = input.length;
	if ( !len ) {
		return null;
	}
	a = input[ 0 ];
	for ( var i = 1; i < len; i++ ) {
		b = input[ i ];
		a = gcd_two_numbers( a, b );
	}
	return a;
}

function gcd_two_numbers(x, y) {
  if ((typeof x !== 'number') || (typeof y !== 'number'))
    return false;
  x = Math.abs(x);
  y = Math.abs(y);
  while(y) {
    var t = y;
    y = x % y;
    x = t;
  }
  return x;
}
console.log("_________________________________________");
console.log("Find the Greatest Common Divisor or GCD of more than 2 integers :");
console.log(gcd_more_than_two_numbers([3,15,27]));
console.log(gcd_more_than_two_numbers([5,10,15,25]));

// Least common multiple (LCM) of two numbers
function lcm_two_numbers(x, y) {
   if ((typeof x !== 'number') || (typeof y !== 'number'))
    return false;
  return (!x || !y) ? 0 : Math.abs((x * y) / gcd_two_numbers(x, y));
}

function gcd_two_numbers(x, y) {
  x = Math.abs(x);
  y = Math.abs(y);
  while(y) {
    var t = y;
    y = x % y;
    x = t;
  }
  return x;
}
console.log("_________________________________________");
console.log("Least common multiple (LCM) of two numbers :");
console.log(lcm_two_numbers(3,15));
console.log(lcm_two_numbers(10,15));

// Least common multiple (LCM) of more than 2 integers
function lcm_more_than_two_numbers(input_array) {
    if (toString.call(input_array) !== "[object Array]")
        return  false;
 var r1 = 0, r2 = 0;
    var l = input_array.length;
    for(i=0;i<l;i++) {
        r1 = input_array[i] % input_array[i + 1];
        if(r1 === 0) {
            input_array[i + 1] = (input_array[i] * input_array[i+1]) / input_array[i + 1];
        }
        else {
            r2 = input_array[i + 1] % r1;
            if(r2 === 0) {
                input_array[i + 1] = (input_array[i] * input_array[i + 1]) / r1;
            }
            else {
                input_array[i+1] = (input_array[i] * input_array[i + 1]) / r2;
            }
        }
    }
    return input_array[l - 1];
}
console.log("_________________________________________");
console.log("Least common multiple (LCM) of more than 2 integers :");
console.log(lcm_more_than_two_numbers([100,90,80,7]));
console.log(lcm_more_than_two_numbers([5,10,15,25]));

// Find out if a number is a natural number or not
function is_Natural(n)
      {
	   if (typeof n !== 'number')
	        return 'Not a number';

	 return (n >= 0.0) && (Math.floor(n) === n) && n !== Infinity;
	    }
console.log("_________________________________________");
console.log("Find out if a number is a natural number or not :");
console.log(is_Natural(-15));
console.log(is_Natural(1));console.log(is_Natural(10.22));
console.log(is_Natural(10/0));

//Test if a number is a power of 2
function power_of_2() {
  var n = +document.getElementById("num_power_of_2").value;
 if (typeof n !== 'number')
      document.getElementById("result_power_of_2").innerHTML = "The result is : " + 'Not a number';

    document.getElementById("result_power_of_2").innerHTML = "The result is : " + n && (n & (n - 1)) === 0;
}

// Round a number to a given specific decimal places
function precise_round(num, dec){

  if ((typeof num !== 'number') || (typeof dec !== 'number'))
return false;

  var num_sign = num >= 0 ? 1 : -1;

  return (Math.round((num*Math.pow(10,dec))+(num_sign*0.0001))/Math.pow(10,dec)).toFixed(dec);
}
console.log("_________________________________________");
console.log("Round a number to a given specific decimal places :");
console.log(precise_round(12.375,2));
console.log(precise_round(12.37499,2));
console.log(precise_round(-10.3079499, 3));

// Check whether a value is an integer or not
function is_Int(num) {

   if (typeof num !== 'number')
       return false;

  return !isNaN(num) &&
         parseInt(Number(num)) == num &&
         !isNaN(parseInt(num, 10));
}
console.log("_________________________________________");
console.log("Check whether a value is an integer or not :");
console.log(is_Int(23));
console.log(is_Int(4e2));
console.log(is_Int(NaN));
console.log(is_Int(23.75));
console.log(is_Int(-23));

//Check whether a variable is numeric or not
function is_Numeric() {
  var num = document.getElementById("num_is_Numeric").value;
  document.getElementById("result_is_Numeric").innerHTML = "The result is : " + !isNaN(parseFloat(num)) && isFinite(num);
}

// Calculate the sum of values in an array
function sum(input){

 if (toString.call(input) !== "[object Array]")
    return false;

            var total =  0;
            for(var i=0;i<input.length;i++)
              {
                if(isNaN(input[i])){
                continue;
                 }
                  total += Number(input[i]);
               }
             return total;
            }
console.log("_________________________________________");
console.log("Calculate the sum of values in an array :");
console.log(sum([1,2,3]));
console.log(sum([100,-200,3]));
console.log(sum([1,2,'a',3]));

// Pythagorean function in JavaScript
function pythagorean_theorem(x, y) {
  if ((typeof x !== 'number') || (typeof y !== 'number'))
return false;
		return Math.sqrt(x * x + y * y);
	}
console.log("_________________________________________");
console.log("Pythagorean function in JavaScript :");
console.log(pythagorean_theorem(2, 4));
console.log(pythagorean_theorem(3, 4));

// Evaluate binomial coefficients
function binomial(n, k) {
     if ((typeof n !== 'number') || (typeof k !== 'number'))
  return false;
    var coeff = 1;
    for (var x = n-k+1; x <= n; x++) coeff *= x;
    for (x = 1; x <= k; x++) coeff /= x;
    return coeff;
}
console.log("_________________________________________");
console.log("Evaluate binomial coefficients :");
console.log(binomial(8,3));
console.log(binomial(10,2));

// Convert an integer into a Roman Numeral
function integer_to_roman() {
  var num = +document.getElementById("number_integer_to_roman").value;
if (typeof num !== 'number')
document.getElementById("result_integer_to_roman").innerHTML = "The result is : " + false;

var digits = String(+num).split(""),
key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
"","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
"","I","II","III","IV","V","VI","VII","VIII","IX"],
roman_num = "",
i = 3;
while (i--)
roman_num = (key[+digits.pop() + (i * 10)] || "") + roman_num;
document.getElementById("result_integer_to_roman").innerHTML = "The result is : " + Array(+digits.join("") + 1).join("M") + roman_num;
}

// Convert Roman Numeral to Integer
function roman_to_Int(str1) {
if(str1 == null) return -1;
var num = char_to_int(str1.charAt(0));
var pre, curr;

for(var i = 1; i < str1.length; i++){
curr = char_to_int(str1.charAt(i));
pre = char_to_int(str1.charAt(i-1));
if(curr <= pre){
num += curr;
} else {
num = num - pre*2 + curr;
}
}

return num;
}

function char_to_int(c){
switch (c){
case 'I': return 1;
case 'V': return 5;
case 'X': return 10;
case 'L': return 50;
case 'C': return 100;
case 'D': return 500;
case 'M': return 1000;
default: return -1;
}
}
console.log("_________________________________________");
console.log("Convert Roman Numeral to Integer :");
console.log(roman_to_Int('XXVI'));
console.log(roman_to_Int('CI'));

// Function to create a UUID identifier
function create_UUID(){
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    });
    return uuid;
}
console.log("_________________________________________");
console.log("Function to create a UUID identifier :");
console.log(create_UUID());

// Round a number to a specified number of digits and strip extra zeros
var a = 1.1234000;
var result = parseFloat(a.toFixed(4));
console.log("_________________________________________");
console.log("Round a number to a specified number of digits and strip extra zeros :");
console.log(result);

// Currency math (add, subtract, multiply, division etc.)
var n1 = '$40.24';
var n2 = '$21.57';
var regp = /[^0-9.-]+/g;
console.log("_________________________________________");
console.log("Currency math (add, subtract, multiply, division etc.) :");
console.log(parseFloat(n1.replace(regp, '')) +       parseFloat(n2.replace(regp, '')));
console.log(parseFloat(n1.replace(regp, '')) -         parseFloat(n2.replace(regp, '')));
console.log(parseFloat(n1.replace(regp, '')) *         parseFloat(n2.replace(regp, '')));
console.log(parseFloat(n1.replace(regp, '')) /         parseFloat(n2.replace(regp, '')));

// Calculate the nth root of a number
function nthroot(x, n)
   {
    ng = n % 2;
    if((ng == 1) || x<0)
       x = -x;
    var r = Math.pow(x, 1 / n);
    n = Math.pow(r, n);

    if(Math.abs(x - n) < 1 && (x > 0 === n > 0))
      return ng ? -r : r;
   }
console.log("_________________________________________");
console.log("Calculate the nth root of a number :");
console.log(nthroot(64, 2));
console.log(nthroot(64, -2));

// Calculate degrees between 2 points with inverse Y axis
function pointDirection(x1, y1, x2, y2) {
    return Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
}
console.log("_________________________________________");
console.log("Calculate degrees between 2 points with inverse Y axis :");
console.log(pointDirection(1, 0, 12, 0));
console.log(pointDirection(1, 0, 1, 10));

// Round up an integer value to the next multiple of 5
function int_round5()
{
  var num = +document.getElementById("num_int_round5").value;
    document.getElementById("result_int_round5").innerHTML = "The result is : " + Math.ceil(num/5)*5;
}

// Convert a positive number to negative number
function pos_to_neg()
{
var num = +document.getElementById("num_pos_to_neg").value;
document.getElementById("result_pos_to_neg").innerHTML = "The result is : " + (-Math.abs(num));
}

// Cast a square root of a number to an integer
function sqrt_to_int()
{
  var num = +document.getElementById("num_sqrt_to_int").value;

document.getElementById("result_sqrt_to_int").innerHTML = "The result is : " + parseInt(Math.sqrt(num)+"");
}

//Get the highest number from three different numbers
function highest_of_three(num1, num2, num3)
{
    return Math.max(num1, num2, num3);
}
console.log("_________________________________________");
console.log("Get the highest number from three different numbers :");
console.log(highest_of_three(-5, 4, 2));

// Calculate the percentage of a number
function percentage(num, per)
{
  return (num/100)*per;
}
console.log("_________________________________________");
console.log("Calculate the percentage of a number :");
console.log(percentage(1000, 47.12));

// Convert degrees to radians
function degrees_to_radians(degrees)
{
  var pi = Math.PI;
  return degrees * (pi/180);
}
console.log("_________________________________________");
console.log("Convert degrees to radians :");
console.log(degrees_to_radians(45));

// Convert radians to degrees
function radians_to_degrees()
{
  var radians = +document.getElementById("num_radians_to_degrees").value;
  var pi = Math.PI;
  document.getElementById("result_radians_to_degrees").innerHTML = "The result is : " + radians * (180/pi);
}

// The Pythagorean theorem
function pythagorean(sideA, sideB){
  return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
}
console.log("_________________________________________");
console.log("The Pythagorean theorem :");
console.log(pythagorean(4, 3));

// Return values that are powers of two
function isPower_of_two(num)
  {
     return num && (num & (num - 1)) === 0;
}
console.log("_________________________________________");
console.log("Return values that are powers of two :");
console.log(isPower_of_two(64));
console.log(isPower_of_two(94));

// Limit a value inside a certain range
function value_limit(val, min, max) {
  return val < min ? min : (val > max ? max : val);
}
console.log("_________________________________________");
console.log("Limit a value inside a certain range :");
console.log(value_limit(7, 1, 12));
console.log(value_limit(-7, 0, 12));
console.log(value_limit(15, 0, 12));

// Check if a number is a whole number or has a decimal place
function number_test(n)
{
   var result = (n - Math.floor(n)) !== 0;

  if (result)
    return 'Number has a decimal place.';
   else
     return 'It is a whole number.';
  }
console.log("_________________________________________");
console.log("Check if a number is a whole number or has a decimal place :");
console.log(number_test(25.66));
console.log(number_test(10));

// Print an integer with commas as thousands separators
function thousands_separators()
  {
    var num = +document.getElementById("num_thousands_separators").value;

    var num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    document.getElementById("result_thousands_separators").innerHTML = "The result is : " + num_parts.join(".");
  }

// Create random background color
function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
 console.log(bgColor);

    document.body.style.background = bgColor;
    }

// Count the digits of an integer
function digits_count() {
  var n = +document.getElementById("num_digits_count").value;
  var count = 0;
  if (n > 1) ++count;

  while (n / 10 >= 1) {
    n /= 10;
    ++count;
  }
  document.getElementById("result_digits_count").innerHTML = "The result is : " + count;
}

// Calculate the combination of n and r
function product_Range(a,b) {
  var prd = a,i = a;

  while (i++< b) {
    prd*=i;
  }
  return prd;
}


function combinations(n, r)
{
  if (n==r)
  {
    return 1;
  }
  else
  {
    r=(r < n-r) ? n-r : r;
    return product_Range(r+1, n)/product_Range(1,n-r);
  }
}
console.log("_________________________________________");
console.log("Calculate the combination of n and r :");
console.log(combinations(6, 2));
console.log(combinations(5, 3));

// Get all prime numbers from 0 to a specified number
function primeFactorsTo()
{
  var max = +document.getElementById("num_primeFactorsTo").value;
    var store  = [], i, j, primes = [];
    for (i = 2; i <= max; ++i)
    {
        if (!store [i])
          {
            primes.push(i);
            for (j = i << 1; j <= max; j += i)
            {
                store[j] = true;
            }
        }
    }
    document.getElementById("result_primeFactorsTo").innerHTML = "The result is : " + primes;
}
// Show the Hamming numbers
function Hamming(n) {
        var succession = [1];
        var length = succession.length;
        var candidate = 2;
        while (length < n) {
            if (isHammingNumber(candidate)) {
                succession[length] = candidate;
                length++;
            }
            candidate++;
        }
        return succession;
  }
 function isHammingNumber(num) {
        while (num % 5 === 0) num /= 5;
        while (num % 3 === 0) num /= 3;
        while (num % 2 === 0) num /= 2;

        return num == 1;
    }
console.log("_________________________________________");
console.log("Show the Hamming numbers :");
console.log(Hamming(20));

// Subtract elements from one another in an array
function subtraction(arr)
 {
  if (Object.prototype.toString.call(arr) === '[object Array]') {
    var total = arr[0];
    if (typeof (total) !== 'number') {
      return false;
    }
    for (var i = 1, length = arr.length; i < length; i++)
    {
      if (typeof (arr[i]) === 'number')
      {
        total -= arr[i];
      }
      else
      return false;
    }
    return total;
   }
    else
     return false;
  }
console.log("_________________________________________");
console.log("Subtract elements from one another in an array :");
console.log(subtraction([7,3, 2,-1]));

// Calculate the divisor and modulus of two integers
function div_mod(a, b)
 {
  if (b <= 0)
    throw new Error("b cannot be zero. Undefined.");
  if (isInt(a) && !isInt(b))
    throw new Error("A or B are not integers.");
  return [Math.floor(a / b), a % b];
}
function isInt(n) {
  return n % 1 === 0;
}
console.log("_________________________________________");
console.log("Calculate the divisor and modulus of two integers :");
console.log(div_mod(17, 4));

// Calculate the extended Euclid Algorithm or extended GCD
function Euclid_gcd(a, b) {
  a = +a;
  b = +b;
  if (a !== a || b !== b) {
    return [NaN, NaN, NaN];
  }

  if (a === Infinity || a === -Infinity || b === Infinity || b === -Infinity) {
    return [Infinity, Infinity, Infinity];
  }
  // Checks if a or b are decimals
  if ((a % 1 !== 0) || (b % 1 !== 0)) {
    return false;
  }
  var signX = (a < 0) ? -1 : 1,
    signY = (b < 0) ? -1 : 1,
    x = 0,
    y = 1,
    u = 1,
    v = 0,
    q, r, m, n;
  a = Math.abs(a);
  b = Math.abs(b);

  while (a !== 0) {
    q = Math.floor(b / a);
    r = b % a;
    m = x - u * q;
    n = y - v * q;
    b = a;
    a = r;
    x = u;
    y = v;
    u = m;
    v = n;
  }
  return [b, signX * x, signY * y];
}
console.log("_________________________________________");
console.log("Calculate the extended Euclid Algorithm or extended GCD :");
console.log(Euclid_gcd(17, 4));

// Calculate the falling factorial of a number
function fallingFactorial(n, k)
{
  var i = (n - k + 1),
    r = 1;
  if (n < 0)
  {
    throw new Error("n must be positive.");
  }
  if (k > n)
  {
    throw new Error("k cannot be greater than n.");
  }
  while (i <= n)
  {
    r *= i++;
  }
  return r;
}
console.log("_________________________________________");
console.log("Calculate the falling factorial of a number :");
console.log(fallingFactorial(10, 2));

// Calculate Lanczos approximation gamma
function Lanczos_Gamma(num)
{
  var p = [
    0.99999999999980993, 676.5203681218851, -1259.1392167224028,
    771.32342877765313, -176.61502916214059, 12.507343278686905, -0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7
  ];
  var i;
  var g = 7;
  if (num < 0.5) return Math.PI / (Math.sin(Math.PI * num) * calculus.LanczosGamma(1 - num));
  num -= 1;
  var a = p[0];
  var t = num + g + 0.5;
  for (i = 1; i < p.length; i++) {
    a += p[i] / (num + i);
  }
  return Math.sqrt(2 * Math.PI) * Math.pow(t, num + 0.5) * Math.exp(-t) * a;
}
console.log("_________________________________________");
console.log("Calculate Lanczos approximation gamma :");
console.log(Lanczos_Gamma(5));

// Add two complex numbers
function Complex(real, imaginary) {
  this.real = 0;
  this.imaginary = 0;
  this.real = (typeof real === 'undefined') ? this.real : parseFloat(real);
  this.imaginary = (typeof imaginary === 'undefined') ? this.imaginary : parseFloat(imaginary);
}
Complex.transform = function(num) {
  var complex;
  complex = (num instanceof Complex) ? num : complex;
  complex = (typeof num === 'number') ? new Complex(num, 0) : num;
  return complex;
};
function display_complex(re, im) {
  if(im === '0') return '' + re;
  if(re === 0) return '' + im + 'i';
  if(im < 0) return '' + re + im + 'i';
  return '' + re + '+' + im + 'i';
}
function complex_num_add(first, second) {
  var num1, num2;
  num1 = Complex.transform(first);
  num2 = Complex.transform(second);
  var real = num1.real + num2.real;
  var imaginary = num1.imaginary + num2.imaginary;
  return display_complex(real, imaginary);
}
 var a = new Complex(2, -7);
 var b = new Complex(4,  3);
console.log("_________________________________________");
console.log("Add two complex numbers :");
console.log(complex_num_add(a,b));

// Subtract two complex numbers
function Complex(real, imaginary) {
  this.real = 0;
  this.imaginary = 0;
  this.real = (typeof real === 'undefined') ? this.real : parseFloat(real);
  this.imaginary = (typeof imaginary === 'undefined') ? this.imaginary : parseFloat(imaginary);
}
Complex.transform = function(num) {
  var complex;
  complex = (num instanceof Complex) ? num : complex;
  complex = (typeof num === 'number') ? new Complex(num, 0) : num;
  return complex;
};
function display_complex(re, im) {
  if(im === '0') return '' + re;
  if(re === 0) return '' + im + 'i';
  if(im < 0) return '' + re + im + 'i';
  return '' + re + '+' + im + 'i';
}
function complex_num_subtract(first, second) {
  var num1, num2;
  num1 = Complex.transform(first);
  num2 = Complex.transform(second);
  var real = num1.real - num2.real;
  var imaginary = num1.imaginary - num2.imaginary;
  return display_complex(real, imaginary);
}
 var a = new Complex(2, -7);
 var b = new Complex(4,  3);
console.log("_________________________________________");
console.log("Subtract two complex numbers :");
console.log(complex_num_subtract(a,b));

// Multiply two complex numbers
function Complex(real, imaginary) {
  this.real = 0;
  this.imaginary = 0;
  this.real = (typeof real === 'undefined') ? this.real : parseFloat(real);
  this.imaginary = (typeof imaginary === 'undefined') ? this.imaginary : parseFloat(imaginary);
}
Complex.transform = function(num) {
  var complex;
  complex = (num instanceof Complex) ? num : complex;
  complex = (typeof num === 'number') ? new Complex(num, 0) : num;
  return complex;
};
function display_complex(re, im) {
  if(im === '0') return '' + re;
  if(re === 0) return '' + im + 'i';
  if(im < 0) return '' + re + im + 'i';
  return '' + re + '+' + im + 'i';
}
function complex_num_multiply(first, second) {
  var num1, num2;
  num1 = Complex.transform(first);
  num2 = Complex.transform(second);
   var real = (num1.real * num2.real)-(num1.imaginary * num2.imaginary);
  var imaginary = (num1.real * num2.imaginary)+(num1.imaginary * num2.real);
   return display_complex(real, imaginary);
}
 var a = new Complex(2, -7);
 var b = new Complex(4,  3);
 console.log("_________________________________________");
 console.log("Multiply two complex numbers :");
console.log(complex_num_multiply(a,b));

// Divide two complex numbers
function Complex(real, imaginary) {
  this.real = 0;
  this.imaginary = 0;
  this.real = (typeof real === 'undefined') ? this.real : parseFloat(real);
  this.imaginary = (typeof imaginary === 'undefined') ? this.imaginary : parseFloat(imaginary);
}
Complex.transform = function(num) {
  var complex;
  complex = (num instanceof Complex) ? num : complex;
  complex = (typeof num === 'number') ? new Complex(num, 0) : num;
  return complex;
};
function display_complex(re, im) {
  if(im === '0') return '' + re;
  if(re === 0) return '' + im + 'i';
  if(im < 0) return '' + re + im + 'i';
  return '' + re + '+' + im + 'i';
}
function complex_num_divide(first, second) {
  var num1, num2;
  num1 = Complex.transform(first);
  num2 = Complex.transform(second);
  var denom = num2.imaginary * num2.imaginary + num2.real * num2.real;
var real = (num1.real * num2.real + num1.imaginary * num2.imaginary) /denom;
var imaginary = (num2.real * num1.imaginary - num1.real * num2.imaginary) /denom;
return display_complex(real, imaginary);
}
 var a = new Complex(2, -7);
 var b = new Complex(4,  3);
 console.log("_________________________________________");
 console.log("Divide two complex numbers :");
console.log(complex_num_divide(a,b));
