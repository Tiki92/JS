// JavaScript: Find the greatest common divisor of two positive numbers
function greatestDivider() {
  var input1 = +document.getElementById("first_greatestDivider").value;
  var input2 = +document.getElementById("second_greatestDivider").value;
    var smaller = 0;
    var result = 1;

    if (input1 < input2) {
        smaller = input1;
        bigger = input2;
    } else {
        smaller = input2;
        bigger = input1;
    }

    if (bigger % smaller == 0) {
        document.getElementById("result_greatestDivider").innerHTML = "The result is : " + smaller;
    } else {
        for (i = 2; i < smaller; i++) {
            if (input1 % i == 0 && input2 % i == 0) {
                result *= i;
            }
        }
        document.getElementById("result_greatestDivider").innerHTML = "The result is : " + result;
    }
}
