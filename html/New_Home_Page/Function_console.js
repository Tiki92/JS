// Show console.log in the HTML file
window.console = {
  log: function(str){
    var node = document.createElement("div");
    node.appendChild(document.createTextNode(str));
    document.getElementById("myLog").appendChild(node);
  }
}
console.log("JavaScript_Basic :");
console.log("_________________________________________");
// Check if 1 appears in first or last position of a given array of integers
function first_last_1(nums)
{
  var end_pos = nums.length - 1;
  return nums[0] == 1 || nums[end_pos] == 1;
}

console.log('Check if 1 appears in first or last position of a given array of integers:');
console.log(first_last_1([1, 3, 5]));
console.log(first_last_1([1, 3, 5, 1]));
console.log(first_last_1([2, 4, 6]));

// Check if the first and last elements are equal of a given array of integers length 3
function first_last_same(nums)
   {
    var end = nums.length - 1;
    if (nums.length >= 1){
       return nums[0] == nums[end];
    } else {return false;}
}
console.log("_________________________________________");
console.log("Check if the first and last elements are equal of a given array of integers length 3:");
console.log(first_last_same([10, 20, 30]));
console.log(first_last_same([10, 20, 30, 10]));
console.log(first_last_same([20, 20, 20]));

//  Reverse the elements of a given array of integers length 3
function reverse3(array) {
    return array.map((element, idx, arr) => arr[(arr.length - 1) - idx]);

}
console.log("_________________________________________");
console.log("Reverse the elements of a given array of integers length 3:");
console.log(reverse3([5, 4, 3]));
console.log(reverse3([1, 0, -1]));
console.log(reverse3([2, 3, 1]));

// Find the larger value between the first or last and set all the other elements with that value
function all_max(nums)
 {
    var max_val = nums[0] > nums[2] ? nums[0] : nums[2];

    nums[0] = max_val;
    nums[1] = max_val;
    nums[2] = max_val;

    return nums;
}
console.log("_________________________________________");
console.log("Find the larger value between the first or last and set all the other elements with that value");
console.log(all_max([20, 30, 40]));
console.log(all_max([-7, -9, 0]));
console.log(all_max([12, 10, 3]));

// Create a new array taking the middle elements of the two arrays of integer and each length 3
function middle_elements(a, b)
{
  var new_array = []
  new_array.push(a[1], b[1]);

    return new_array;
}
console.log("_________________________________________");
console.log("Create a new array taking the middle elements of the two arrays of integer and each length 3 :");
console.log(middle_elements([1, 2, 3], [1, 5, 6]));
console.log(middle_elements([3, 3, 3], [2, 8, 0]));
console.log(middle_elements([4, 2, 7], [2, 4, 5]));

// Create a new array taking the first and last elements from a given array of integers and length must be greater or equal to 1
function started(nums) {
     var array1 = [];
     array1.push(nums[0], nums[nums.length - 1]);

     return array1;
}
console.log("_________________________________________");
console.log("Create a new array taking the first and last elements from a given array of integers and length must be greater or equal to 1 :")
console.log(started([20, 20, 30]));
console.log(started([5, 2, 7, 8]));
console.log(started([17, 12, 34, 78]));

// Test if an array of integers of length 2 contains 1 or a 3
function contins13(nums) {

    if (nums.indexOf(1) != -1 || nums.indexOf(3) != -1){
       return true
    }
    else
    {
       return false
    }
}
console.log("_________________________________________");
console.log("Test if an array of integers of length 2 contains 1 or a 3 :")
console.log(contins13([1, 5]));
console.log(contins13([2, 3]));
console.log(contins13([7, 5]));

// Test if a given array of integers contains 30 and 40 twice
function twice3040(arra1) {
    let a = arra1[0],
        b = arra1[1];
    return (a === 30 && b === 30) || (a === 40 && b === 40);
}
console.log("_________________________________________");
console.log("est if a given array of integers contains 30 and 40 twice :");
console.log(twice3040([30, 30]));
console.log(twice3040([40, 40]));
console.log(twice3040([20, 20]));
console.log(twice3040([30]));

// Swap the first and last elements of a given array of integers
function swap(arra) {
    [arra[0], arra[arra.length - 1]] = [arra[arra.length - 1], arra[0]];
    return arra;
}
console.log("_________________________________________");
console.log("Swap the first and last elements of a given array of integers :");
console.log(swap([1, 2, 3, 4]));
console.log(swap([0, 2, 1]));
console.log(swap([3]));

// Add two digits of a given positive integer of length two
function add_two_digits(n)
   {
      return n % 10 + Math.floor(n / 10);
   }
console.log("_________________________________________");
console.log("Add two digits of a given positive integer of length two :");
console.log(add_two_digits(25))
console.log(add_two_digits(50))

// Find the longest string from an given array of strings
function longest_string(str_ara) {
  var max = str_ara[0].length;
  str_ara.map(v => max = Math.max(max, v.length));
  result = str_ara.filter(v => v.length == max);
  return result;
}
console.log("_________________________________________");
console.log("Find the longest string from an given array of strings :");
console.log(longest_string(['a', 'aa', 'aaa',
                                          'aaaaa','aaaa']))

// Replace each character of a given string by the next one in the English alphabet
function alphabet_char_Shift(str) {
  var all_chars = str.split("");
  for(var i = 0; i < all_chars.length; i++) {
    var n = all_chars[i].charCodeAt() - 'a'.charCodeAt();
    n = (n + 1) % 26;
    all_chars[i] = String.fromCharCode(n + 'a'.charCodeAt());
  }
  return all_chars.join("");
}
console.log("_________________________________________");
console.log("Replace each character of a given string by the next one in the English alphabet :")
console.log(alphabet_char_Shift("abcdxyz"))

// Compute the sum of two parts and store into an array of size two
function alternate_Sums(arr) {
  var result = [0, 0];
  for(var i = 0; i < arr.length; i++)
  {
    if(i % 2) result[1] += arr[i];
    else
      result[0] += arr[i];
  }
  return result
}
console.log("_________________________________________");
console.log("Compute the sum of two parts and store into an array of size two :");
console.log(alternate_Sums([1, 2, 3, 4, 5, 6]))

// Check whether two arrays of integers and same length are similar or not
function array_checking(arra1, arra2) {

  for(var i = 0; i < arra1.length; i++) {
    for(var j = i; j < arra1.length; j++) {
      var result = true,
        temp = arra1[i];
      arra1[i] = arra1[j];
      arra1[j] = temp;
      for(var k = 0; k < arra1.length; k++) {
        if(arra1[k] !== arra2[k]) {
          result = false;
          break;
        }
      }
      if(result) {
        return true;
      }
      arra1[j] = arra1[i];
      arra1[i] = temp;
    }
  }
  return false;
}
console.log("_________________________________________");
console.log("Check whether two arrays of integers and same length are similar or not :");
console.log(array_checking([10,20,30], [10,20,30]))
console.log(array_checking([10,20,30], [30,10,20]))
console.log(array_checking([10,20,30,40], [10,30,20,40]))

//  Check whether it is possible to replace $ in a specified expression
function check_arithmetic_Expression(x, y, z) {
  return x + y == z || x * y == z || x / y == z || x - y == z;
}
console.log("_________________________________________");
console.log("Check whether it is possible to replace $ in a specified expression :");
console.log(check_arithmetic_Expression(10, 25, 35))
console.log(check_arithmetic_Expression(10, 25, 250))
console.log(check_arithmetic_Expression(30, 25, 5))
console.log(check_arithmetic_Expression(100, 25, 4.0))
console.log(check_arithmetic_Expression(100, 25, 25))

// Find the kth greatest element of a given array of integers
function Kth_greatest_in_array(arr, k) {

  for (var i = 0; i < k; i++) {
    var max_index = i,
      tmp = arr[i];

    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[max_index]) {
        max_index = j;
      }
    }

    arr[i] = arr[max_index];
    arr[max_index] = tmp;
  }

  return arr[k - 1];
}
console.log("_________________________________________");
console.log("Find the kth greatest element of a given array of integers :");
console.log(Kth_greatest_in_array([1,2,3,4,5], 3))
console.log(Kth_greatest_in_array([-10,-25,-47,-36,0], 1))

// Find the maximum possible sum of some of its k consecutive numbers of a specified array of positive integers
function array_max_consecutive_sum(nums, k) {
  let result = 0;
  let temp_sum = 0;
  for (var i = 0; i < k - 1; i++) {
    temp_sum += nums[i];
  }
  for (var i = k - 1; i < nums.length; i++) {
    temp_sum += nums[i];
    if (temp_sum > result) {
      result = temp_sum;
    }
    temp_sum -= nums[i - k + 1];
  }
  return result;
}
console.log("_________________________________________");
console.log("Find the maximum possible sum of some of its k consecutive numbers of a specified array of positive integers");
console.log(array_max_consecutive_sum([1, 2, 3, 14, 5], 2))
console.log(array_max_consecutive_sum([2, 3, 5, 1, 6], 3))
console.log(array_max_consecutive_sum([9, 3, 5, 1, 7], 2))

// Find the maximal difference between any two adjacent elements of a given array of integers
function max_difference(arr) {
	var max = -1;
    var temp;
	for (var i = 0; i < arr.length - 1; i++)
      {
		temp = Math.abs(arr[i] - arr[i + 1]);
		max = Math.max(max, temp);
	  }
	return max;
}
console.log("_________________________________________");
console.log("Find the maximal difference between any two adjacent elements of a given array of integers :");
console.log(max_difference([1, 2, 3, 8, 9]))
console.log(max_difference([1, 2, 3, 18, 9]))
console.log(max_difference([13, 2, 3, 8, 9]))

//  Find the maximal difference among all possible pairs of a given array of integers
function array_max_diff(arr) {

    var max_result = 0;

    for(var i=0;i<arr.length;i++)
       {
        for(var k=0; k!=i && k<arr.length; k++)
        {
            var diff = Math.abs(arr[i]-arr[k]);
            max_result = Math.max(max_result, diff);
        }
    }
    return max_result;
}
console.log("_________________________________________");
console.log("Find the maximal difference among all possible pairs of a given array of integers :");
console.log(array_max_diff([1, 2, 3, 8, 9]))
console.log(array_max_diff([1, 2, 3, 18, 9]))
console.log(array_max_diff([13, 2, 3, 8, 9]))

// Find the number which appears most in a given array of integers
function array_element_mode(arr) {
  var ctr = [],
    ans = 0;

  for(var i = 0; i < 10; i++) {
    ctr.push(0);
  }
  for(var i = 0; i < arr.length; i++) {
    ctr[arr[i] - 1]++;
    if(ctr[arr[i] - 1] > ctr[ans]) {
      ans = arr[i] - 1;
    }
  }
  return ans + 1;
}
console.log("_________________________________________");
console.log("Find the number which appears most in a given array of integers :");
console.log(array_element_mode([1, 2, 3, 2, 2, 8, 1, 9]))

//  Replace all the numbers with a specified number of a given array of integers
function array_element_replace(arr, old_value, new_value) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === old_value) {
      arr[i] = new_value;
    }
  }
  return arr;
}
num = [1, 2, 3, 2, 2, 8, 1, 9];
console.log("_________________________________________");
console.log("Replace all the numbers with a specified number of a given array of integers :");
console.log("Original Array: "+num);
console.log(array_element_replace(num, 2, 5));

// Compute the sum of absolute differences of consecutive numbers of a given array of integers
function sum_adjacent_difference(arr) {
	var result = 0;
	for (var i = 1; i < arr.length; i++) {
		result += Math.abs(arr[i] - arr[i - 1]);
	}
	return result;
}
console.log("_________________________________________");
console.log("Compute the sum of absolute differences of consecutive numbers of a given array of integers :");
console.log(sum_adjacent_difference([1, 2, 3, 2, -5]));

// Find the shortest possible string which can create a string to make it a palindrome by adding characters to the end of it
function build_Palindrome(new_str) {
  var flag;
  for (var i = new_str.length;; i++) {
    flag = true;
    for (var j = 0; j < i - j - 1; j++) {
      if (i - j - 1 < new_str.length && new_str[j] != new_str[i - j - 1]) {
        flag = false;
        break;
      }
    }
    if (flag) {
      for (var j = new_str.length; j < i; j++) {
        new_str += new_str[i - j - 1];
      }
      return new_str;
    }
  }
}
console.log("_________________________________________");
console.log(build_Palindrome("abcddc"))
console.log(build_Palindrome("122"))

// Check if there is at least one element which occurs in two given sorted arrays of integers
function check_common_element(arra1, arra2) {
  for (var i = 0; i < arra1.length; i++)
  {
    if (arra2.indexOf(arra1[i]) != -1)
      return true;
  }
  return false;
}
console.log("_________________________________________");
console.log("Check if there is at least one element which occurs in two given sorted arrays of integers :");
console.log(check_common_element([1,2,3], [3,4,5]));
console.log(check_common_element([1,2,3], [5,6,7]));

// Check whether a given string contains only Latin letters and no two uppercase and no two lowercase letters are in adjacent positions
function test_string(input_str) {

  var is_lower_case = function(symbol) {
    if ('a' <= symbol && symbol <= 'z') {
      return true;
    }
    return false;
  }

  var is_upper_case = function(symbol) {
    if ('A' <= symbol && symbol <= 'Z') {
      return true;
    }
    return false;
  }

  var is_first_char_lower = is_lower_case(input_str[0]),
    is_first_char_upper = is_upper_case(input_str[0]);

  if (!(is_first_char_lower || is_first_char_upper)) {
    return false;
  }

  for (var i = 1; i < input_str.length; i++) {
    if (i % 2) {
      if (is_lower_case(input_str[i]) === is_first_char_lower ||
        is_upper_case(input_str[i]) === is_first_char_upper) {
        return false;
      }
    } else {
      if (is_lower_case(input_str[i]) !== is_first_char_lower ||
        is_upper_case(input_str[i]) !== is_first_char_upper) {
        return false;
      }
    }
  }

  return true;
}
console.log("_________________________________________");
console.log("Check whether a given string contains only Latin letters and no two uppercase and no two lowercase letters are in adjacent positions :");
console.log(test_string('xYr'));
console.log(test_string('XXyx'));

// Find the number of inversions of a specified array of integers
function number_of_InversionsNaive(arr) {
    var ctr = 0;
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j])
              ctr++;
        }
    }
    return ctr;
}
console.log("_________________________________________");
console.log("Find the number of inversions of a specified array of integers :");
console.log(number_of_InversionsNaive([0, 3, 2, 5, 9]));
console.log(number_of_InversionsNaive([1, 5, 4, 3]));
console.log(number_of_InversionsNaive([10, 30, 20, -10]));

// Find the maximal number from a given positive integer by deleting exactly one digit of the given number
function digit_delete(num) {
    var result = 0,
        num_digits = [];
    while (num) {
        num_digits.push(num % 10);
        num = Math.floor(num / 10);
    }
    for (var index_num = 0; index_num < num_digits.length; index_num++) {
        var n = 0;
        for (var i = num_digits.length - 1; i >= 0; i--) {
            if (i !== index_num) {
                n = n * 10 + num_digits[i];
            }
        }
        result = Math.max(n, result);
    }
    return result;
}
console.log("_________________________________________");
console.log("Find the maximal number from a given positive integer by deleting exactly one digit of the given number :");
console.log(digit_delete(100));
console.log(digit_delete(10));
console.log(digit_delete(1245));

// Find two elements of the array such that their absolute difference is not greater than a given integer but is as close to the said integer
function different_values(ara, n) {
    var max_val = -1;
    for (var i = 0; i < ara.length; i++) {
        for (var j = i + 1; j < ara.length; j++) {
            var x = Math.abs(ara[i] - ara[j]);
            if (x <= n) {
                max_val = Math.max(max_val, x)
            }
        }
    }
    return max_val
}
console.log("_________________________________________");
console.log("Find two elements of the array such that their absolute difference is not greater than a given integer but is as close to the said integer :");
console.log(different_values([12, 10, 33, 34], 10));
console.log(different_values([12, 10, 33, 34], 24));
console.log(different_values([12, 10, 33, 44], 40));

// Find the number of times to replace a given number with the sum of its digits until it convert to a single digit number
function digit_to_one(num) {

    var digitSum = function(num) {

        var digit_sum = 0;
        while (num) {
            digit_sum += num % 10;
            num = Math.floor(num / 10);
            //console.log(num);
            //console.log(digit_sum);
        }

        return digit_sum;
    };

    var result = 0;

    while (num >= 10) {
        result += 1;
        num = digitSum(num);
    }

    return result;
}
console.log("_________________________________________");
console.log("Find the number of times to replace a given number with the sum of its digits until it convert to a single digit number :");
console.log(digit_to_one(123))
console.log(digit_to_one(156))

// Divide an integer by another integer as long as the result is an integer and return the result
function divide_digit(num, d) {
    var ctr = 0;
    while (num % d === 0) {
        num /= d;
        ctr++;
    }
    return num;
}
console.log("_________________________________________");
console.log("Divide an integer by another integer as long as the result is an integer and return the result :");
console.log(divide_digit(-12, 2))
console.log(divide_digit(13, 2))

// Find the number of sorted pairs formed by its elements of an given array of integers such that one element in the pair is divisible by the other on
function arr_pairs(arr) {
    var result = 0;
    for (var i = 0; i < arr.length; i++)
        {
        for (var j = i + 1; j < arr.length; j++)
            {
              if (arr[i] % arr[j] === 0 || arr[j] % arr[i] === 0)
                {
                result++;
                }
         }
      }
    return result;
}
console.log("_________________________________________");
console.log("Find the number of sorted pairs formed by its elements of an given array of integers such that one element in the pair is divisible by the other on :");
console.log(arr_pairs([1,2,3]))
console.log(arr_pairs([2,4,6]))
console.log(arr_pairs([2,4,16]))

//Create the dot products of two given 3D vectors
function dot_product(vector1, vector2) {
  var result = 0;
  for (var i = 0; i < 3; i++) {
    result += vector1[i] * vector2[i];
  }
  return result;
}
console.log("_________________________________________");
console.log("Create the dot products of two given 3D vectors :");
console.log(dot_product([1,2,3], [1,2,3]))
console.log(dot_product([2,4,6], [2,4,6]))
console.log(dot_product([1,1,1], [0,1,-1]))

// Sort an array of all prime numbers between 1 and a given integer
function sort_prime(num) {

  var prime_num1 = [],
      prime_num2 = [];
  for (var i = 0; i <= num; i++) {
    prime_num2.push(true);
    //console.log(prime_num2);
  }
  for (var i = 2; i <= num; i++) {
    if (prime_num2[i]) {
      prime_num1.push(i);
      for (var j = 1; i * j <= num; j++) {
        prime_num2[i * j] = false;
      }
    }
  }

  return prime_num1;
}
console.log("_________________________________________");
console.log(sort_prime(5))
console.log(sort_prime(11))
console.log(sort_prime(19))

// Find the number of even values in sequence before the first occurrence of a given number
function find_numbers(arr_num, num) {
    var result = 0;
    for (var i = 0; i < arr_num.length; i++)
    {
        if (arr_num[i] % 2 === 0 && arr_num[i] !== num) {
            result++;
        }
        if (arr_num[i] === num)
        {
            return result;
        }
    }
    return -1;
}
console.log("_________________________________________");
console.log("Find the number of even values in sequence before the first occurrence of a given number :");
console.log(find_numbers([1,2,3,4,5,6,7,8], 5));
console.log(find_numbers([1,3,5,6,7,8], 6));

// Check a number from three given numbers where two numbers are equal, find the third one
function find_third_number(x, y, z) {
   if((x!==y) && (x!==z) && (y!==z))
    return "Three numbers are unequal.";
	if(x==y) return z;
	if(x==z) return y;
	return x;
}
console.log("_________________________________________");
console.log("Check a number from three given numbers where two numbers are equal, find the third one :");
console.log(find_third_number(1,2,2))
console.log(find_third_number(1,1,2))
console.log(find_third_number(1,2,3))

// Find the number of trailing zeros in the decimal representation of the factorial of a given number
function trailing_zeros_factorial(n) {
    var result = 0;
    for (var i = 5; i <= n; i += 5) {
        var num = i;
        while (num % 5 === 0) {
            num /= 5;
            result++;
        }
    }
    return result;
}
console.log("_________________________________________");
console.log("Find the number of trailing zeros in the decimal representation of the factorial of a given number :");
console.log(trailing_zeros_factorial(8))
console.log(trailing_zeros_factorial(9))
console.log(trailing_zeros_factorial(10))
console.log(trailing_zeros_factorial(15))

// Calculate the sum n + n/2 + n/4 + n/8 + ....
function int_sum(num) {
    var s_sum = 0;

    while (num > 0) {
        s_sum += num;
        num = Math.floor(num / 2);
        //console.log(num);
        //console.log(s_sum);
    }
    return s_sum;
}
console.log("_________________________________________");
console.log("Calculate the sum n + n/2 + n/4 + n/8 + .... :")
console.log(int_sum(8))
console.log(int_sum(9))
console.log(int_sum(26))

// Check whether a matrix is a diagonal matrix or not
function is_diagonal_matrix(user_matrix) {
    for (var i = 0; i < user_matrix.length; i++) {
        for (var j = 0; j < user_matrix.length; j++) {
          //console.log("value");
          //console.log(user_matrix[i]);
          //console.log(user_matrix[j]);
          //console.log(i);
          //console.log(j);
          //console.log(user_matrix[i][j]);
            if (i !== j && user_matrix[i][j] !== 0)

              return false;
        }
    }
    return true;
}
console.log("_________________________________________");
console.log("Check whether a matrix is a diagonal matrix or not :")
console.log(is_diagonal_matrix([[1, 0, 0], [0, 2, 0], [0, 0, 3] ]));
console.log(is_diagonal_matrix([[1, 0, 0], [0, 2, 3], [0, 0, 3] ]));

// Find all the possible options to replace the hash in a string
function is_divisible_by3(mask_str) {
  let digitSum = 0;
  const left = '0'.charCodeAt();
  const right = '9'.charCodeAt();
  const result = [];
  const mask_data = mask_str.split('');
  let hash_pos = -1;

  for (var i = 0; i < mask_data.length; i++) {
    if (left <= mask_data[i].charCodeAt() && mask_data[i].charCodeAt() <= right)
    {
      digitSum += mask_data[i].charCodeAt() - left;
    }
    else
    {
      hash_pos = i;
    }
  }

  for (var i = 0; i < 10; i++) {
    if ((digitSum + i) % 3 === 0) {
      mask_data[hash_pos] = String.fromCharCode(left + i);
      result.push(mask_data.join(''));
    }
  }

  return result;
}
console.log("_________________________________________");
console.log("Find all the possible options to replace the hash in a string :");
console.log(is_divisible_by3("2#0"))
console.log(is_divisible_by3("4#2"))

// Check if a given matrix is an identity matrix
function is_identity_Matrix(matrix_data) {
  for (var i = 0; i < matrix_data.length; i++)
   {
    for (var j = 0; j < matrix_data.length; j++)
     {
       //console.log(matrix_data[i])
       //console.log(matrix_data[j])
       //console.log(i)
       //console.log(j)
      if (matrix_data[i][j] !== 1 && i === j || matrix_data[i][j] === 1 && i !== j)
      {

        return false;
      }
    }
  }
  return true;
}
console.log("_________________________________________");
console.log("Check if a given matrix is an identity matrix :");
console.log(is_identity_Matrix([[1, 0, 0],  [0, 1, 0],  [0, 0, 1]]))
console.log(is_identity_Matrix([[1, 0, 1],  [0, 1, 0],  [0, 0, 1]]))

// Check if a given number is in a given range
function is_inrange(x, y, z)
{
    return y >= x && y <= z;
}
console.log("_________________________________________");
console.log("Check if a given number is in a given range :")
console.log(is_inrange(1,2,3));
console.log(is_inrange(1,2,-3));
console.log(is_inrange(1.1,1.2,1.3));

// Check if a given integer has an increasing digits sequence
function is_increasing_digits_Sequence(num) {

  var arr_num = ('' + num).split('');

  for (var i = 0; i < arr_num.length - 1; i++) {
    if (parseInt(arr_num[i]) >= parseInt(arr_num[i + 1]))
      return false;
    }
  return true;
}
console.log("_________________________________________");
console.log("Check if a given integer has an increasing digits sequence :")
console.log(is_increasing_digits_Sequence(123));
console.log(is_increasing_digits_Sequence(1223));
console.log(is_increasing_digits_Sequence(45677));

// Check if a point lies strictly inside a given circle
function check_a_point(a, b, x, y, r) {
    var dist_points = (a - x) * (a - x) + (a - y) * (a - y);
    r *= r;
    if (dist_points < r) {
        return true;
    }
    return false;
}
console.log("_________________________________________");
console.log("Check if a point lies strictly inside a given circle :")
console.log(check_a_point(0, 0, 2, 4, 6));
console.log(check_a_point(0, 0, 6, 8, 6));

// Check if a given matrix is lower triangular or not
function lower_triangular_matrix(user_matrix) {
    for (var i = 0; i < user_matrix.length; i++)
         {
        for (var j = 0; j < user_matrix[0].length; j++)
            {
            if (j > i && user_matrix[i][j] !== 0)
              return false;
        }
    }
    return true;
}
console.log("_________________________________________");
console.log("Check if a given matrix is lower triangular or not :")
console.log(lower_triangular_matrix([[1, 0, 0],[2, 0, 0], [0, 3, 3]]));
console.log(lower_triangular_matrix([[1, 0, 1],[2, 0, 0], [0, 3, 3]]));

// Check whether a given array of integers represents either a strictly increasing or a strictly decreasing sequence
function is_monotonous(num) {
    if (num.length === 1) {
        return true;
    }
    var num_direction = num[1] - num[0];
    for (var i = 0; i < num.length - 1; i++) {
        if (num_direction * (num[i + 1] - num[i]) <= 0) {
            return false;
        }
    }
    return true;
}
console.log("_________________________________________");
console.log("Check whether a given array of integers represents either a strictly increasing or a strictly decreasing sequence :")
console.log(is_monotonous([1, 2, 3]));
console.log(is_monotonous([1, 2, 2]))
console.log(is_monotonous([-3, -2, -1]))

// Find if the members of an given array of integers is a permutation of numbers from 1 to a given integer
function is_permutation(input_arr, n) {
    for (var i = 0; i < n; i++) {
        if (input_arr.indexOf(i + 1) < 0)
          return false;
    }
    return true;
}
console.log("_________________________________________");
console.log("Find if the members of an given array of integers is a permutation of numbers from 1 to a given integer :")
console.log(is_permutation([1, 2, 3, 4, 5], 5));
console.log(is_permutation([1, 2, 3, 5], 5));

// Create the value of NOR of two given booleans
function test_logical_Nor(a, b) {
  return (!a && !b)
}
console.log("_________________________________________");
console.log("Create the value of NOR of two given booleans :")
console.log(test_logical_Nor(true, false));
console.log(test_logical_Nor(false, false));
console.log(test_logical_Nor(true, true));

// Find the longest string from a given array
function longest_str_in_array(arra)
  {
    var max_str = arra[0].length;
    var ans = arra[0];
    for (var i = 1; i < arra.length; i++) {
        var maxi = arra[i].length;
        if (maxi > max_str) {
            ans = arra[i];
            max_str = maxi;
        }
    }
    return ans;
}
console.log("_________________________________________");
console.log("Find the longest string from a given array :")
console.log(longest_str_in_array(["ab", "a", "abcd"]));
console.log(longest_str_in_array(["ab", "ab", "ab"]));

// Get the largest even number from an array of integers
function max_even(arra) {

  arra.sort((x, y) => y - x);
  //console.log(arra.sort(x, y))
  for (var i = 0; i < arra.length; i++) {
    if (arra[i] % 2 == 0)
      return arra[i];
    }
  }
console.log("_________________________________________");
console.log("Get the largest even number from an array of integers :")
console.log(max_even([20, 40, 200]));
console.log(max_even([20, 40, 200, 301]));

// Reverse the order of the bits in a given integer
function mirror_bits(n) {
  return parseInt(n.toString(2).split("").reverse().join(""),2);
}
console.log("_________________________________________");
console.log("Reverse the order of the bits in a given integer :")
console.log(mirror_bits(56));
console.log(mirror_bits(234));

// Find the smallest round number that is not less than a given value
function nearest_round_number(num) {
    while (num % 10) {
        num++;
    }
    return num;
}
console.log("_________________________________________");
console.log("Find the smallest round number that is not less than a given value :")
console.log(nearest_round_number(56));
console.log(nearest_round_number(592));

// Find the smallest prime number strictly greater than a given number
function next_Prime_num(num) {
    for (var i = num + 1;; i++) {
        var isPrime = true;
        for (var d = 2; d * d <= i; d++) {
            if (i % d === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            return i;
        }
    }
}
console.log("_________________________________________");
console.log("Find the smallest prime number strictly greater than a given number :")
console.log(next_Prime_num(3));
console.log(next_Prime_num(17));
