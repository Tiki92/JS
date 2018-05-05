// Show console.log in the HTML file
window.console = {
  log: function(str){
    var node = document.createElement("div");
    node.appendChild(document.createTextNode(str));
    document.getElementById("myLog").appendChild(node);
  }
}
console.log("JavaScript_Array :");
console.log("                      ");
// Array or not
is_array = function(input) {
  if (toString.call(input) === "[object Array]")
    return true;
  return false;
    };
console.log("_________________________________________");
console.log("Is it an array or not :");
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));

// Clone an array
array_Clone = function(arra1) {
  return arra1.slice(0);
};
console.log("_________________________________________");
console.log("Clone an array :");
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));

// Get the first element of an array
first = function(array, n) {
  if (array == null)
    return void 0;
  if (n == null)
  return array[0];
  if (n < 0)
  return [];
  return array.slice(0, n);
}
console.log("_________________________________________");
console.log("Get the first element of an array :");
console.log(first([7, 9, 0 -2]));
console.log(first([], 3));
console.log(first([7, 9, 0, -2], 3));
console.log(first([7, 9, 0, -2], 6));
console.log(first([7, 9, 0, -2], -3));

// Get the last element of an array
last = function(array, n) {
  if (array == null)
  return void 0;
  if (n == null)
  return array[array.length - 1];
  return array.slice(Math.max(array.length - n, 0));
};
console.log("_________________________________________");
console.log("Get the last element of an array :");
console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2], 3));
console.log(last([7, 9 ,0, -2], 6));

// Join all elements of an array into a string
myColor = ["Red", "Green", "White", "Black"];
console.log("_________________________________________");
console.log("Join all elements of an array into a string :");
console.log(myColor.toString());
console.log(myColor.join());
console.log(myColor.join('+'));

// Insert dashes (-) between each two even digits of a specific number
function separateNums() {
const num=window.prompt("Enter a serie of numbers :");
const str = num.toString();
const result = [str[0]];

for(let x=1; x<str.length; x++)
  {
    if((str[x-1]%2 === 0)&&(str[x]%2 === 0))
     {
      result.push('-', str[x]);
     }
    else
     {
      result.push(str[x]);
     }
  }
console.log("_________________________________________");
console.log("Insert dashes (-) between each two even digits of a specific number :")
console.log(result.join(''));
}

// Sort the items of an array
function sort(arr){
  console.log("_________________________________________");
  console.log("Sort the items of an array :");
var a = arr.sort(function(a,b){return a - b})
console.log(a);
}

// Find the most frequent item of an array
function mostFreq() {
  console.log("_________________________________________");
  console.log("Find the most frequent item of an array :");
  var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var mf = 1;
var m = 0;
var item;
for (var i=0; i<arr1.length; i++)
{
        for (var j=i; j<arr1.length; j++)
        {
                if (arr1[i] == arr1[j])
                 m++;
                if (mf<m)
                {
                  mf=m;
                  item = arr1[i];
                }
        }
        m=0;
}
console.log(item+" ( " +mf +" times ) ") ;
}

// Swap the case of each character of a string, upper case to lower and vice versa
function swapCase() {
  console.log("_________________________________________");
  console.log("Swap the case of each character of a string, upper case to lower and vice versa :");
  var str = document.getElementById("str_swapCase").value;
var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var LOWER = 'abcdefghijklmnopqrstuvwxyz';
var result = [];

  for(var x=0; x<str.length; x++)
  {
    if(UPPER.indexOf(str[x]) !== -1)
    {
      result.push(str[x].toLowerCase());
    }
    else if(LOWER.indexOf(str[x]) !== -1)
    {
      result.push(str[x].toUpperCase());
    }
    else
    {
      result.push(str[x]);
    }
  }
document.getElementById("result_swapCase").innerHTML = "The result is :" + result.join('');
}

// Print the elements of an array
function printArr() {
  // a sample 2-D array
  console.log("_________________________________________");
  console.log("Print the elements of an array :");
var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

for (var i in a)
{
   console.log("row " + i);
   for (var j in a[i])
     {
      console.log(" " + a[i][j]);
     }
}
}

// Find the sum of squares of a numeric vector
function sum_sq(array) {
  var sum = 0,
      i = array.length;
  while (i--)
   sum += Math.pow(array[i], 2);
  //return sum;
  document.getElementById("result_sum_sq").innerHTML = "The result is :" + sum;
}

// Compute the sum and product of an array of integers
function sum_product () {
  var array = [1, 2, 3, 4, 5, 6],
    s = 0,
    p = 1,
    i;
for (i = 0; i < array.length; i += 1)
   {
    s += array[i];
    p *= array[i];
    }
document.getElementById("result_sum_product").innerHTML = "The result is : " + ('Sum : '+s + ' Product :  ' +p);
}

// Add items in a blank array and display the items
var x = 0;
var array = Array();

function add_element_to_array()
{
 array[x] = document.getElementById("text_addItems").value;
 alert("Element: " + array[x] + " Added at index " + x);
 x++;
 document.getElementById("text_addItems").value = "";
}

function display_array()
{
   var e = "<hr/>";

   for (var y=0; y<array.length; y++)
   {
     e += "Element " + y + " = " + array[y] + "<br/>";
   }
   document.getElementById("Result_addItems").innerHTML = e;
}

// Remove duplicate items from an array, ignore case sensitivity
function removeDuplicates(num) {
  var x,
      len=num.length,
      out=[],
      obj={};

  for (x=0; x<len; x++) {
    obj[num[x]]=0;
  }
  for (x in obj) {
    out.push(x);
  }
  return out;
}

var Mynum = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];
var result = removeDuplicates(Mynum);
console.log("_________________________________________");
console.log("Remove duplicate items from an array, ignore case sensitivity :");
console.log(Mynum);
console.log(result);

// Display the colors entered in an array by a specific format
var color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
console.log("_________________________________________");
 console.log("Display the colors entered in an array by a specific format :");
function Ordinal(n)
 {
 var o = ["th","st","nd","rd"],
 x = n%100;
 return x+(o[(x-20)%10]||o[x]||o[0]);
 }

for(n = 0; n < color.length; n++){
 var ordinal = n + 1;

 var output = (Ordinal(ordinal) + " choice is " + color[n] + ".");

console.log(output);
}

// Display the colors entered in an array by a specific format
var color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
console.log("_________________________________________");
console.log("Display the colors entered in an array by a specific format :");
function Ordinal(n)
 {
 var o = ["th","st","nd","rd"],
 x = n%100;
 return x+(o[(x-20)%10]||o[x]||o[0]);
 }

for(n = 0; n < color.length; n++){
 var ordinal = n + 1;

 var output = (Ordinal(ordinal) + " choice is " + color[n] + ".");

console.log(output);
}

// Randomly arrange or shuffle an array
function shuffle(arra1) {
    var ctr = arra1.length, temp, index;
    console.log("_________________________________________");
    console.log("Randomly arrange or shuffle an array :");
// While there are elements in the array
    while (ctr > 0) {
// Pick a random index
        index = Math.floor(Math.random() * ctr);
// Decrease ctr by 1
        ctr--;
// And swap the last element with it
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}
var myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(shuffle(myArray));

// Perform a binary search within an array
function binary_Search(items, value){

    var firstIndex  = 0,
        lastIndex   = items.length - 1,
        middleIndex = Math.floor((lastIndex + firstIndex)/2);

    while(items[middleIndex] != value && firstIndex < lastIndex)
    {
       if (value < items[middleIndex])
        {
            lastIndex = middleIndex - 1;
        }
      else if (value > items[middleIndex])
        {
            firstIndex = middleIndex + 1;
        }
        middleIndex = Math.floor((lastIndex + firstIndex)/2);
    }

 return (items[middleIndex] != value) ? -1 : middleIndex;
}
var items = [1, 2, 3, 4, 5, 7, 8, 9];
console.log("_________________________________________");
console.log("Perform a binary search within an array :");
console.log(binary_Search(items, 1));
console.log(binary_Search(items, 5));

//  Compute the sum of each individual index value of two or more arrays
function Arrays_sum(array1, array2)
{
  var result = [];
  var ctr = 0;
  var x=0;

  if (array1.length === 0)
   return "array1 is empty";
  if (array2.length === 0)
   return "array2 is empty";

 while (ctr < array1.length && ctr < array2.length)
  {
    result.push(array1[ctr] + array2[ctr]);
    ctr++;
  }

 if (ctr === array1.length)
 {
    for (x = ctr; x < array2.length; x++)   {
      result.push(array2[x]);
    }
  }
  else
  {
  for (x = ctr; x < array1.length; x++)
    {
      result.push(array1[x]);
    }
  }
  return result;
}
console.log("_________________________________________");
console.log("Compute the sum of each individual index value of two or more arrays :");
console.log(Arrays_sum([1,0,2,3,4], [3,5,6,7,8,13]));

// Find duplicate values in a array
function find_duplicate_in_array(arra1) {
  var i,
  len=arra1.length,
  result = [],
  obj = {};
  for (i=0; i<len; i++)
  {
  obj[arra1[i]]=0;
  }
  for (i in obj) {
  result.push(i);
  }
  return result;
  }
var arr = [1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6];
console.log("_________________________________________");
console.log("Find duplicate values in a array :");
console.log(find_duplicate_in_array(arr));

// Flatten a nested array
var flatten = function(a, shallow,r){
  if(!r){ r = []}

if (shallow) {
  return r.concat.apply(r,a);
  }

   for(var i=0; i<a.length; i++){
        if(a[i].constructor == Array){
            flatten(a[i],shallow,r);
        }else{
            r.push(a[i]);
        }
    }
    return r;
}
console.log("_________________________________________");
console.log("Flatten a nested array :");
console.log(flatten([1, [2], [3, [[4]]],[5,6]]));
console.log(flatten([1, [2], [3, [[4]]],[5,6]], true));

// Compute the union of two arrays
function union(arra1, arra2) {

  if ((arra1 == null) || (arra2==null))
    return void 0;

  var obj = {};

  for (var i = arra1.length-1; i >= 0; -- i)
     obj[arra1[i]] = arra1[i];

  for (var i = arra2.length-1; i >= 0; -- i)
     obj[arra2[i]] = arra2[i];

  var res = [];

  for (var n in obj)
  {

    if (obj.hasOwnProperty(n))
      res.push(obj[n]);
  }

  return res;
}
console.log("_________________________________________");
console.log("Compute the union of two arrays :");
console.log(union([1, 2, 3], [100, 2, 1, 10]));

// Find the difference of two arrays
function differenceOf2Arrays (array1, array2) {
var temp = [];
array1 = array1.toString().split(',').map(Number);
array2 = array2.toString().split(',').map(Number);

for (var i in array1) {
if(array2.indexOf(array1[i]) === -1) temp.push(array1[i]);
}
for(i in array2) {
if(array1.indexOf(array2[i]) === -1) temp.push(array2[i]);
}
return temp.sort((a,b) => a-b);
}
console.log("_________________________________________");
console.log("Find the difference of two arrays :");
console.log(differenceOf2Arrays([1, 2, 3], [100, 2, 1, 10]));
console.log(differenceOf2Arrays([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));

// Remove null, 0, blank, false, undefined and NaN values from an array
function filter_array(test_array) {
    var index = -1,
        arr_length = test_array ? test_array.length : 0,
        resIndex = -1,
        result = [];

    while (++index < arr_length) {
        var value = test_array[index];

        if (value) {
            result[++resIndex] = value;
        }
    }

    return result;
}
console.log("_________________________________________");
console.log("Remove null, 0, blank, false, undefined and NaN values from an array :");
console.log(filter_array([NaN, 0, 15, false, -22, '',undefined, 47, null]));

// Sort the specified array of objects by title value
var library = [
   { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
   { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
   { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
   ];

function compare_to_sort(x,y)
 {
  if (x.title < y.title)
    return -1;
  if (x.title > y.title)
    return 1;
  return 0;
 }
 console.log("_________________________________________");
console.log("Sort the specified array of objects by title value :");
console.log(library.sort(compare_to_sort));

// Find a pair of elements from an specified array whose sum equals a specific target number
function twoSum(nums, target_num) {
  var map = [];
  var indexnum = [];

  for (var x = 0; x < nums.length; x++)
  {
  if (map[nums[x]] != null)
  {
  index = map[nums[x]];
  indexnum[0] = index+1;
  indexnum[1] = x+1;
  break;
  }
  else
  {
  map[target_num - nums[x]] = x;
  }
  }
  return indexnum;
  }
  console.log("_________________________________________");
  console.log("Find a pair of elements from an specified array whose sum equals a specific target number :");
console.log(twoSum([10,20,10,40,50,60,70],50));

  // Retrieve the value of a specified property from all elements in an array
  var library1 = [
   { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
   { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
   { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
   ];

function property_value(array, property_key) {
	var arr = [],
		index = -1,
		arrlen = array.length,array_items;

	while (++index < arrlen) {
		array_items = array[index];

  if (array_items.hasOwnProperty(property_key))
      {
	 arr[arr.length] = array_items[property_key];
      }
	}

	return arr;
}
console.log("_________________________________________");
console.log("Retrieve the value of a specified property from all elements in an array :");
console.log(property_value(library1, 'title'));
console.log(property_value(library1, 'author'));

// Find the longest common starting substring in a set of strings
function longest_common_starting_substring(arr1){
var arr= arr1.concat().sort(),
a1= arr[0], a2= arr[arr.length-1], L= a1.length, i= 0;
while(i< L && a1.charAt(i)=== a2.charAt(i)) i++;
return a1.substring(0, i);
}
console.log("_________________________________________");
console.log("Find the longest common starting substring in a set of strings :");
console.log(longest_common_starting_substring(['go', 'google']));

console.log(longest_common_starting_substring(['SQLInjection', 'SQLTutorial']));

console.log(longest_common_starting_substring(['abcd', '1234']));

// Fill an array with values on supplied bounds
function num_string_range(start, end, step)
  {
    var range = [];
    if ((step === 0) || (typeof start == "undefined" || typeof end ==    "undefined") || (typeof start != typeof end))
     return false;

    if (end < start) {
        step = -step;
    }

    if (typeof start == "number") {

        while (step > 0 ? end >= start : end <= start) {
            range.push(start);
            start += step;
        }
        }
      else if (typeof start == "string") {

        if (start.length != 1 || end.length != 1) {
            throw TypeError("Strings with one character are supported.");
        }

        start = start.charCodeAt(0);
        end = end.charCodeAt(0);

        while (step > 0 ? end >= start : end <= start) {
            range.push(String.fromCharCode(start));
            start += step;
        }

    }

    else
       {
        throw TypeError("Only string and number are supported");
        }

    return range;

}
console.log("_________________________________________");
console.log("Fill an array with values on supplied bounds :");
console.log(num_string_range('a', "z", 2));
console.log(num_string_range("Z", "A", 2));
console.log(num_string_range(0, -5, 1));
console.log(num_string_range(0, 25, 5));
console.log(num_string_range(20, 5, 5));

// Merge two arrays and removes all duplicates elements
function merge_array(array1, array2) {
    var result_array = [];
    var arr = array1.concat(array2);
    var len = arr.length;
    var assoc = {};

    while(len--) {
        var item = arr[len];

        if(!assoc[item])
        {
            result_array.unshift(item);
            assoc[item] = true;
        }
    }

    return result_array;
}


var array_duplicates1 = [1, 2, 3];

var array_duplicates2 = [2, 30, 1];
console.log("_________________________________________");
console.log("Merge two arrays and removes all duplicates elements :");
console.log(merge_array(array_duplicates1, array_duplicates2));

// Remove a specific element from an array
function remove_array_element(array, n)
 {
   var index = array.indexOf(n);
   if (index > -1) {
    array.splice(index, 1);
}
   document.getElementById("result_remove_array_element").innerHTML = "The result is :" + array;
 }

// Find to if an array contains a specific element
function contains(arr, element) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return true;
        }
    }
    return false;
}
arr = [2, 5, 9, 6];
console.log("_________________________________________");
console.log("Find to if an array contains a specific element :");
console.log(contains(arr, 5));

// Get nth largest element from an unsorted array
function nthlargest(arra,highest){
			var x = 0,
				y = 0,
				z = 0,
				temp = 0,
				tnum = arra.length,
				flag = false,
				result = false;

			while(x < tnum){
				y = x + 1;

				if(y < tnum){
					for(z = y; z < tnum; z++){

						if(arra[x] < arra[z]){
							temp = arra[z];
							arra[z] = arra[x];
							arra[x] = temp;
							flag = true;
						}else{
							continue;
						}
					}
				}

				if(flag){
					flag = false;
				}else{
					x++;
					if(x === highest){

						result = true;
					}
				}
				if(result){
					break;
				}
			}

			return (arra[(highest - 1)]);
		}
console.log("_________________________________________");
console.log("Get nth largest element from an unsorted array :");
console.log(nthlargest([ 43, 56, 23, 89, 88, 90, 99, 652], 4));

// Get a random item from an array
function random_item(items)
{

return items[Math.floor(Math.random()*items.length)];

}

var items = [254, 45, 212, 365, 2543];
console.log("_________________________________________");
console.log("Get a random item from an array :");
console.log(random_item(items));

// Create a specified number of elements and pre-filled numeric value array
function array_filled()
{
  var n = +document.getElementById("number_array_filled").value;
  var val = +document.getElementById("number2_array_filled").value;

    document.getElementById("result_array_filled").innerHTML = "The result is :" + Array.apply(null, Array(n)).map(Number.prototype.valueOf,val);
}

// Create a specified number of elements and pre-filled string value array
function array_filled(n, val)
{
    return Array.apply(null, Array(n)).map(String.prototype.valueOf,val);
}
console.log("_________________________________________");
console.log("Create a specified number of elements and pre-filled string value array :");
console.log(array_filled(3, 'default value'));
console.log(array_filled(4, 'password'));

// Move an array element from one position to another
function move(arr, old_index, new_index) {
    while (old_index < 0) {
        old_index += arr.length;
    }
    while (new_index < 0) {
        new_index += arr.length;
    }
    if (new_index >= arr.length) {
        var k = new_index - arr.length;
        while ((k--) + 1) {
            arr.push(undefined);
        }
    }
     arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
   return arr;
}
console.log("_________________________________________");
console.log("Move an array element from one position to another :");
console.log(move([10, 20, 30, 40, 50], 0, 2));
console.log(move([10, 20, 30, 40, 50], -1, -2));

// Filter false, null, 0 and blank values from an array
function filter_array_values(arr) {
  arr = arr.filter(isEligible);
  return arr;
}

function isEligible(value) {
  if(value !== false || value !== null || value !== 0 || value !== "") {
    return value;
  }
}
console.log("_________________________________________");
console.log("Filter false, null, 0 and blank values from an array :");
console.log(filter_array_values([58, '', 'abcd', true, null, false, 0]));

// Generate an array of specified length, the content of the array is integer numbers, increase by one from starting
function array_range(start, len)
     {
		var arr = new Array(len);
		for (var i = 0; i < len; i++, start++)
        {
			arr[i] = start;
		}
      		return arr;
}
console.log("_________________________________________");
console.log("Generate an array of specified length, the content of the array is integer numbers, increase by one from starting :");
console.log(array_range(1, 4));

console.log(array_range(-6, 4));

// Generate an array between two integers of 1 step length
function rangeBetwee(start, end)
{

		if (start > end) {
			var arr = new Array(start - end + 1);
			for (var i = 0; i < arr.length; i++, start--) {
				resarrult[i] = start;
			}
			return arr;
		}
       else
       {
			var arro = new Array(end-start+1);

		for (var j = 0; j < arro.length; j++, start++)
        {
			arro[j] = start;
		}
      		return arro;
		}
	}
console.log("_________________________________________");
console.log("Generate an array between two integers of 1 step length :");
console.log(rangeBetwee(4, 7));
console.log(rangeBetwee(-4, 7));

//  Find the unique elements from two arrays
function difference(arr1,arr2) {

  var a1= flatten(arr1,true);
  var a2= flatten(arr2,true);

 var a=[], diff=[];
  for(var i=0;i< a1.length;i++)
    a[a1[i]]=false;
  for(i=0;i< a2.length;i++)
  if(a[a2[i]]===true)
     { delete a[a2[i]];}
    else a[a2[i]]=true;
  for(var k in a)
    diff.push(k);
  return diff;
  }

var flatten = function(a, shallow,r){
  if(!r){ r = [];}
if (shallow) {
  return r.concat.apply(r,a);
  }
   for(i=0; i< a.length; i++){
        if(a[i].constructor == Array){
            flatten(a[i],shallow,r);
        }else{
            r.push(a[i]);
        }
    }
    return r;
};
console.log("_________________________________________");
console.log("Find the unique elements from two arrays :");
console.log(difference([1, 2, 3], [100, 2, 1, 10]));
console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
console.log(difference([1, 2, 3], [100, 2, 1, 10]));
