console.log("JavaScript_Functions :");
console.log("                      ");

// JavaScript: Check a number is prime or not CONSOLE
function test_prime(n)
{

  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;
  }
}
console.log("JavaScript: Check a number is prime or not :")
console.log(test_prime(37));

// JavaScript: Generates all combinations of a string
function substrings(str1)
{
var array1 = [];
  for (var x = 0, y=1; x < str1.length; x++,y++)
  {
   array1[x]=str1.substring(x, y);
    }
var combi = [];
var temp= "";
var slent = Math.pow(2, array1.length);

for (var i = 0; i < slent ; i++)
{
    temp= "";
    for (var j=0;j<array1.length;j++) {
        if ((i & Math.pow(2,j))){
            temp += array1[j];
        }
    }
    if (temp !== "")
    {
        combi.push(temp);
    }
}
  console.log(combi.join("\n"));
}
console.log("JavaScript: Generates all combinations of a string :");
substrings("dog");

// JavaScript: Get the data type
function detect_data_type(value)
{
var dtypes = [Function, RegExp, Number, String, Boolean, Object], x, len;

if (typeof value === "object" || typeof value === "function")
    {
     for (x = 0, len = dtypes.length; x < len; x++)
     {
            if (value instanceof dtypes[x])
            {
                return dtypes[x];
            }
      }
    }

    return typeof value;
}
console.log("JavaScript: Get the data type :");
console.log(detect_data_type(12));
console.log(detect_data_type('w3resource'));
console.log(detect_data_type(false));

// JavaScript: Returns n rows by n columns identity matrix
function matrix(n) {

        var i;
        var j;

        for (i=0; i < n; i++)
        {
          for (j=0; j < n; j++)
          {
               if (i === j)
               {

                 console.log(' 1 ');
               }

               else
                {
                 console.log(' 0 ');}
                }
             console.log('----------');
           }
       }
       console.log("JavaScript: Returns n rows by n columns identity matrix :");
matrix(4);

// JavaScript: Second lowest and second greatest numbers from an array
function Second_Greatest_Lowest(arr_num) {
  arr_num.sort(function(x,y) {
    //console.log(x - y);
    return x -y;
  });

  var uniqa = [arr_num[0]];
  var result = [];

  for(var j = 1; j < arr_num.length; j++) {
    if (arr_num[j - 1] !== arr_num[j]) {

      uniqa.push(arr_num[j]);
    }
  }

  result.push(uniqa[1], uniqa[uniqa.length - 2]);
  //console.log(result);
  return result.join(',');
}
console.log("JavaScript: Second lowest and second greatest numbers from an array :");
console.log(Second_Greatest_Lowest([1,2,3,4,5]));

// JavaScript: Compute the factors of a positive integers
function factors(n) {
  var num_factors = [], i;

  for(i = 1; i <= Math.floor(Math.sqrt(n)); i += 1)
  //console.log(Math.floor(Math.sqrt(n)));
  if (n % i === 0) {
    num_factors.push(i);
    if (n / i !== i) {
      //console.log(n / i);
      num_factors.push(n / i);
    }
  }

    num_factors.sort(function(x, y) {
      return x - y;}); //numeric sort
  return num_factors;
}
console.log("JavaScript: Compute the factors of a positive integers :");
console.log(factors(15));
console.log(factors(16));
console.log(factors(17));

// JavaScript: Convert an amount to coins
function amountTocoins(amount, coins) {
  if (amount === 0) {
    return [];
  } else {
    if (amount >= coins[0]) {
      var left = (amount - coins[0]);
      //console.log("Coins");
      //console.log(coins);
      return [coins[0]].concat(amountTocoins(left, coins));
    } else {
      coins.shift();
      //console.log(amount);
      return amountTocoins(amount, coins);

    }
  }
}
console.log("JavaScript: Convert an amount to coins :");
console.log(amountTocoins(46, [25, 10, 5, 2, 1]));

// JavaScript: Compute the value of bn where n is the exponent and b is the bases
function exp(b, n) {
  var ans = 1;
  for (var i = 1; i <= n; i++) {
    ans = b * ans;
  }
  return ans;
}
console.log("JavaScript: Compute the value of bn where n is the exponent and b is the bases :");
console.log(exp(2, 3));

// JavaScript: Number of occurrences of each letter in specified string
function Char_Counts(str1) {
var uchars = {};
str1.replace(/\S/g, function(l){uchars[l] = (isNaN(uchars[l]) ? 1 : uchars[l] + 1);});
return uchars;
}
console.log("JavaScript: Number of occurrences of each letter in specified string :");
console.log(Char_Counts("The quick brown fox jumps over the lazy dog"));

// JavaScript: Search JavaScript arrays with a binary search
function array_binarySearch(narray, delement) {
   var mposition = Math.floor(narray.length / 2);

   if (narray[mposition] === delement){
      return mposition;
   }
   else if (narray.length === 1)
   {
      return null;
   }
   else if (narray[mposition] < delement) {
      var arr = narray.slice(mposition + 1);
      var res = array_binarySearch(arr, delement);
      if (res === null)
      {
         return null;
      }
      else {
         return mposition + 1 + res;
      }
   }
   else {
      var arr1 = narray.slice(0, mposition);
      return array_binarySearch(arr1, delement);
   }
}

 var myArray = [1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 17, 19, 20, 22, 23];
 console.log("JavaScript: Search JavaScript arrays with a binary search :");
 console.log(array_binarySearch(myArray, 6));

// JavaScript: Bigger elements in an array
function BiggerElements(val)
   {
     return function(evalue, index, array)
     {
     return (evalue >= val);
     };
   }
var result = [11, 45, 4, 31, 64, 10]. filter(BiggerElements(10));
console.log("JavaScript: Bigger elements in an array :");
console.log(result);

// JavaScript: Get all possible subset with a fixed length combinations in an array
function subset(arra, arra_size)
 {
    var result_set = [],
        result;


for(var x = 0; x < Math.pow(2, arra.length); x++)
  {
    result = [];
    i = arra.length - 1;
     do
      {
      if( (x & (1 << i)) !== 0)
          {
             result.push(arra[i]);
           }
        }  while(i--);

    if( result.length >= arra_size)
       {
          result_set.push(result);
        }
    }

    return result_set;
}
console.log("JavaScript: Get all possible subset with a fixed length combinations in an array :");
console.log(subset([1, 2, 3], 2));

// JavaScript: Find the first not repeated character
function find_FirstNotRepeatedChar(str) {
  var arra1 = str.split('');
  var result = '';
  var ctr = 0;

  for (var x = 0; x < arra1.length; x++) {
    ctr = 0;

    for (var y = 0; y < arra1.length; y++)
    {
      if (arra1[x] === arra1[y]) {
        ctr+= 1;
      }
    }

    if (ctr < 2) {
      result = arra1[x];
      break;
    }
  }
  return result;
}
console.log("JavaScript: Find the first not repeated character :");
console.log(find_FirstNotRepeatedChar('abacddbec'));

// JavaScript: Bubble Sort algorithm
function bubble_Sort(a)
{
    var swapp;
    var n = a.length-1;
    var x=a;
    do {
        swapp = false;
        for (var i=0; i < n; i++)
        {
            if (x[i] < x[i+1])
            {
               var temp = x[i];
               x[i] = x[i+1];
               x[i+1] = temp;
               swapp = true;
            }
        }
        n--;
    } while (swapp);
 return x;
}

console.log(bubble_Sort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));

// JavaScript: Accept a list of words and returns the longest
function Longest_Country_Name(country_name)
  {
  return country_name.reduce(function(lname, country)
  {
    return lname.length > country.length ? lname : country;
  },
"");
}
console.log("JavaScript: Accept a list of words and returns the longest :");
console.log(Longest_Country_Name(["Australia", "Germany", "United States of America"]));

// JavaScript: Find longest substring in a given a string without repeating characters
function longest_substring_without_repeating_characters(input) {
var chars = input.split('');
var curr_char;
var str = "";
var longest_string = "";
var hash = {};
for (var i = 0; i < chars.length; i++) {
curr_char = chars[i];
if (!hash[chars[i]])
{
str += curr_char;
hash[chars[i]] = {index:i};
}
else
{
if(longest_string.length <= str.length)
{
longest_string = str;
}
var prev_dupeIndex = hash[curr_char].index;
var str_FromPrevDupe = input.substring(prev_dupeIndex + 1, i);
str = str_FromPrevDupe + curr_char;
hash = {};
for (var j = prev_dupeIndex + 1; j <= i; j++) {
hash[input.charAt(j)] = {index:j};
}
}
}
return longest_string.length > str.length ? longest_string : str;
}
console.log("JavaScript: Find longest substring in a given a string without repeating characters :");
console.log(longest_substring_without_repeating_characters("google.com"));

console.log(longest_substring_without_repeating_characters("example.com"));

// JavaScript: The longest palindrome in a specified string
function is_Palindrome(str1) {
var rev = str1.split("").reverse().join("");
return str1 == rev;
}

function longest_palindrome(str1){

var max_length = 0,
maxp = '';

for(var i=0; i < str1.length; i++)
{
var subs = str1.substr(i, str1.length);

for(var j=subs.length; j>=0; j--)
{
var sub_subs_str = subs.substr(0, j);
if (sub_subs_str.length <= 1)
continue;

if (is_Palindrome(sub_subs_str))
{
if (sub_subs_str.length > max_length)
{
max_length = sub_subs_str.length;
maxp = sub_subs_str;
}
}
}
}

return maxp;
}
console.log("JavaScript: The longest palindrome in a specified string :");
console.log(longest_palindrome("abracadabra"));

console.log(longest_palindrome("HYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDE"));

// JavaScript: Pass a JavaScript function as parameter
function addStudent(id, refreshCallback)
{
    refreshCallback();
}

function refreshStudentList() {
    console.log('Hello');
}
console.log("JavaScript: Pass a JavaScript function as parameter :");
addStudent(1, refreshStudentList);

// JavaScript: Get the function name
function abc() {
    console.log( arguments.callee.name );
}
console.log("JavaScript: Get the function name :");
abc();
