// Show console.log in the HTML file
window.console = {
  log: function(str){
    var node = document.createElement("div");
    node.appendChild(document.createTextNode(str));
    document.getElementById("myLog").appendChild(node);
  }
}
console.log("JavaScript_Searching_Sorting: ");
console.log("                      ");
// Quick sort
function quick_Sort(origArray) {
	if (origArray.length <= 1) {
		return origArray;
	} else {

		var left = [];
		var right = [];
		var newArray = [];
		var pivot = origArray.pop();
		var length = origArray.length;

		for (var i = 0; i < length; i++) {
			if (origArray[i] <= pivot) {
				left.push(origArray[i]);
			} else {
				right.push(origArray[i]);
			}
		}

		return newArray.concat(quick_Sort(left), pivot, quick_Sort(right));
	}
}

var myArray = [3, 0, 2, 5, -1, 4, 1 ];
console.log("_________________________________________");
console.log("Quick sort  :");
console.log("Original array: " + myArray);
var sortedArray = quick_Sort(myArray);
console.log("Sorted array: " + sortedArray);

// Merge sort
function merge_sort(left_part,right_part)
{
var i = 0;
var j = 0;
var results = [];

while (i < left_part.length || j < right_part.length) {
  if (i === left_part.length) {
    // j is the only index left_part
    results.push(right_part[j]);
    j++;
  }
    else if (j === right_part.length || left_part[i] <= right_part[j]) {
    results.push(left_part[i]);
    i++;
  } else {
    results.push(right_part[j]);
    j++;
  }
}
return results;
}
console.log("_________________________________________");
console.log("Merge sort :");
console.log(merge_sort([1,3,4], [3,7,9]));

// Heap sort
var array_length;
/* to create MAX  array */
function heap_root(input, i) {
  var left = 2 * i + 1;
  var right = 2 * i + 2;
  var max = i;

  if (left < array_length && input[left] > input[max]) {
      max = left;
  }

  if (right < array_length && input[right] > input[max])     {
      max = right;
  }

  if (max != i) {
      swap(input, i, max);
      heap_root(input, max);
  }
}

function swap(input, index_A, index_B) {
  var temp = input[index_A];

  input[index_A] = input[index_B];
  input[index_B] = temp;
}

function heapSort(input) {

  array_length = input.length;

  for (var i = Math.floor(array_length / 2); i >= 0; i -= 1)      {
      heap_root(input, i);
    }

  for (i = input.length - 1; i > 0; i--) {
      swap(input, 0, i);
      array_length--;


      heap_root(input, 0);
  }
}

console.log("_________________________________________");
console.log("Heap sort :");
var arr = [3, 0, 2, 5, -1, 4, 1];
heapSort(arr);
console.log(arr);

// Insertion sort
function insertion_Sort(arr)
{
  for (var i = 1; i < arr.length; i++)
  {
    if (arr[i] < arr[0])
    {
      //move current element to the first position
      arr.unshift(arr.splice(i,1)[0]);
    }
    else if (arr[i] > arr[i-1])
    {
      //leave current element where it is
      continue;
    }
    else {
      //find where element should go
      for (var j = 1; j < i; j++) {
        if (arr[i] > arr[j-1] && arr[i] < arr[j])
        {
          //move element
          arr.splice(j,0,arr.splice(i,1)[0]);
        }
      }
    }
  }
  return arr;
}
console.log("_________________________________________");
console.log("Insertion sort :");
console.log(insertion_Sort([3, 0, 2, 5, -1, 4, 1]));

// Selection sort
function Selection_Sort(arr, compare_Function) {

  function compare(a, b) {
   return a - b;
   }
  var min = 0;
  var index = 0;
  var temp = 0;

 //{Function} compare_Function Compare function
  compare_Function = compare_Function || compare;

  for (var i = 0; i < arr.length; i += 1) {
    index = i;
    min = arr[i];

    for (var j = i + 1; j < arr.length; j += 1) {
      if (compare_Function(min, arr[j]) > 0) {
        min = arr[j];
        index = j;
      }
    }

    temp = arr[i];
    arr[i] = min;
    arr[index] = temp;
  }

  //return sorted arr
  return arr;
}
console.log("_________________________________________");
console.log("Selection sort :");
console.log(Selection_Sort([3, 0, 2, 5, -1, 4, 1], function(a, b) { return a - b; }));
console.log(Selection_Sort([3, 0, 2, 5, -1, 4, 1], function(a, b) { return b - a; }));

// Shell sort
function shellSort(arr) {
    var increment = arr.length / 2;
    while (increment > 0) {
        for (i = increment; i < arr.length; i++) {
            var j = i;
            var temp = arr[i];

            while (j >= increment && arr[j-increment] > temp) {
                arr[j] = arr[j-increment];
                j = j - increment;
            }

            arr[j] = temp;
        }

        if (increment == 2) {
            increment = 1;
        } else {
            increment = parseInt(increment*5 / 11);
        }
    }
  return arr;
}
console.log("_________________________________________");
console.log("Shell sort :");
console.log(shellSort([3, 0, 2, 5, -1, 4, 1]));

// Bubble sort
function swap(arr, first_Index, second_Index){
    var temp = arr[first_Index];
    arr[first_Index] = arr[second_Index];
    arr[second_Index] = temp;
}

function bubble_Sort(arr){

    var len = arr.length,
        i, j, stop;

    for (i=0; i < len; i++){
        for (j=0, stop=len-i; j < stop; j++){
            if (arr[j] > arr[j+1]){
                swap(arr, j, j+1);
            }
        }
    }

    return arr;
}
console.log("_________________________________________");
console.log("Bubble sort :");
console.log(bubble_Sort([3, 0, 2, 5, -1, 4, 1]));

// Cocktail shaker sort
function Cocktail_sort(arr)
{
	var swapped;
	do {
		for(var i = 0; i < arr.length - 2; i++) {
			if(arr[i] > arr[i+1]) {
				var temp = arr[i];
				arr[i] = arr[i+1];
				arr[i+1] = temp;
				swapped = true;
			}
		}
		if(!swapped) {
			break;
		}
		swapped = false;
		for( i = arr.length - 2; i > 0; i--) {
			if(arr[i] > arr[i+1]) {
				var temp1 = arr[i];
				arr[i] = arr[i+1];
				arr[i+1] = temp1;
				swapped = true;
			}
		}
	} while(swapped);
  return arr;
}

var test_arr = [3, 0, 2, 5, -1, 4, 1];
console.log("_________________________________________");
console.log("Cocktail shaker sort :");
console.log(Cocktail_sort(test_arr));

// Comb sort
function combsort(arr)
{
 function is_array_sorted(arr) {
      var sorted = true;
      for (var i = 0; i < arr.length - 1; i++) {
          if (arr[i] > arr[i + 1]) {
              sorted = false;
              break;
          }
      }
      return sorted;
  }

  var iteration_count = 0;
  var gap = arr.length - 2;
  var decrease_factor = 1.25;

  // Repeat iterations Until array is not sorted

  while (!is_array_sorted(arr))
  {
      // If not first gap  Calculate gap
      if (iteration_count > 0)
         gap = (gap == 1) ? gap : Math.floor(gap / decrease_factor);

  // Set front and back elements and increment to a gap
      var front = 0;
      var back = gap;
      while (back <= arr.length - 1)
      {
          // Swap the elements if they are not ordered

          if (arr[front] > arr[back])
          {
              var temp = arr[front];
              arr[front] = arr[back];
              arr[back] = temp;
          }

          // Increment and re-run swapping

          front += 1;
          back += 1;
      }
      iteration_count += 1;
  }
  return arr;
}

 var arra = [3, 0, 2, 5, -1, 4, 1];
console.log("_________________________________________");
console.log("Comb sort :");
console.log("Original Array Elements");
console.log(arra);
console.log("Sorted Array Elements");
console.log(combsort(arra));

// Gnome sort
function gnomeSort(arr)
{
    function moveBack(i)
  {
        for( ; i > 0 && arr[i-1] > arr[i]; i--)
        {
            var t = arr[i];
            arr[i] = arr[i-1];
            arr[i-1] = t;
        }
    }
    for (var i = 1; i < arr.length; i++)
    {
        if (arr[i-1] > arr[i]) moveBack(i);
    }
    return arr;
}

var arra = [3, 0, 2, 5, -1, 4, 1];
console.log("_________________________________________");
console.log("Gnome sort :");
console.log("Original Array Elements");
console.log(arra);
console.log("Sorted Array Elements");
console.log(gnomeSort(arra));

// Counting sort
function countingSort(arr, min, max)
  {
    var i, z = 0, count = [];

    for (i = min; i <= max; i++) {
        count[i] = 0;
    }

    for (i=0; i < arr.length; i++) {
        count[arr[i]]++;
    }

    for (i = min; i <= max; i++) {
        while (count[i]-- > 0) {
            arr[z++] = i;
        }
    }
 return arr;
}
var arra = [3, 0, 2, 5, 4, 1];
console.log("_________________________________________");
console.log("Counting sort :");
console.log(arra.length);
console.log("Original Array Elements");
console.log(arra);
console.log("Sorted Array Elements");
console.log(countingSort(arra, 0, 5));

// Flash sort
function flash_sort(arr)
  {
    var max = 0, min = arr[0];
    var n = arr.length;
    var m = ~~(0.45 * n);
    var l = new Array(m);

    for (var i = 1; i < n; ++i) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > arr[max]) {
            max = i;
        }
    }

     if (min === arr[max]) {
        return arr;
    }

    var c1 = (m - 1) / (arr[max] - min);


    for (var k = 0; k < m; k++) {
        l[k] = 0;
    }
    for (var j = 0; j < n; ++j) {
        k = ~~(c1 * (arr[j] - min));
        ++l[k];
    }

    for (var p = 1; p < m; ++p) {
        l[p] = l[p] + l[p - 1];
    }

    var hold = arr[max];
    arr[max] = arr[0];
    arr[0] = hold;

    //permutation
    var move = 0, t, flash;
    j = 0;
    k = m - 1;

    while (move < (n - 1)) {
        while (j > (l[k] - 1)) {
            ++j;
            k = ~~(c1 * (arr[j] - min));
        }
        if (k < 0) break;
        flash = arr[j];
        while (j !== l[k]) {
            k = ~~(c1 * (flash - min));
            hold = arr[t = --l[k]];
            arr[t] = flash;
            flash = hold;
            ++move;
        }
    }

    //insertion
    for (j = 1; j < n; j++) {
        hold = arr[j];
         i = j - 1;
        while (i >= 0 && arr[i] > hold) {
            arr[i + 1] = arr[i--];
        }
        arr[i + 1] = hold;
    }
    return arr;
}
var arra = [3, 0, 2, 5, -1, 4, 1];
console.log("_________________________________________");
console.log("Flash sort :");
console.log("Original Array Elements");
console.log(arra);
console.log("Sorted Array Elements");
console.log(flash_sort(arra, 0, 5));

// Pancake sort
function pancake_sort(arr) {
    for (var i = arr.length - 1; i >= 1; i--) {
        // find the index of the largest element not yet sorted
        var max_idx = 0;
        var max = arr[0];
        for (var j = 1; j <= i; j++) {
            if (arr[j] > max) {
                max = arr[j];
                max_idx = j;
            }
        }

        if (max_idx == i)
            continue; // element already in place

        var new_slice;

        // flip arr max element to index 0
        if (max_idx > 0) {
            new_slice = arr.slice(0, max_idx+1).reverse();
            for ( j = 0; j <= max_idx; j++)
                arr[j] = new_slice[j];
        }

        // then flip the max element to its place
        new_slice = arr.slice(0, i+1).reverse();
        for ( j = 0; j <= i; j++)
            arr[j] = new_slice[j];
    }
    return arr;
}

var arra = [3, 0, 2, 5, -1, 4, 1];
console.log("_________________________________________");
console.log("Pancake sort :");
console.log("Original Array Elements");
console.log(arra);
console.log("Sorted Array Elements");
console.log(pancake_sort(arra, 0, 5));

// Bogosort
function Bogosort(arr){
    var isSorted = function(arr){
        for(var i = 1; i < arr.length; i++){
            if (arr[i-1] > arr[i]) {
                return false;
            }
        }
        return true;
    };

    function shuffle(arr){
        var count = arr.length, temp, index;

        while(count > 0){
            index = Math.floor(Math.random() * count);
            count--;

            temp = arr[count];
            arr[count] = arr[index];
            arr[index] = temp;
        }

        return arr;
    }

   function sort(arr){
        var sorted = false;
        while(!sorted){
            arr = shuffle(arr);
            sorted = isSorted(arr);
        }
        return arr;
    }

    return sort(arr);
}


var arra = [3, 0, 2, 5, -1, 4, 1];
console.log("_________________________________________");
console.log("Bogosort :");
console.log("Original Array Elements");
console.log(arra);
console.log("Sorted Array Elements");
console.log(Bogosort(arra));
