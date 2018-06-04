// JavaScript: Accept two integers and display the larger
function theBigger() {
  var a = +document.getElementById("number1_theBigger").value;
  var b = +document.getElementById("number2_theBigger").value;

  if (a > b) {
    document.getElementById("result_theBigger").innerHTML = "The result is : " + a;
  } else {
    document.getElementById("result_theBigger").innerHTML = "The result is : " + b;
  }
}

// JavaScript: Find the sign of product of three numbers
function whatSign() {
  var a = +document.getElementById("num1_whatSign").value;
  var b = +document.getElementById("num2_whatSign").value;
  var c = +document.getElementById("num3_whatSign").value;

  if (a * b * c < 0) {
    alert("The sign is : Minus");
  }else {
    alert("The sign is : Plus");
  }
}

// JavaScript: How to sort three numbers
function ex3(x, y, z) {
  var res = [x, y, z];
  res.sort(function(a, b){return b - a});
  return alert(res);
}

// JavaScript: Find the largest of five numbers
function largest_of_five(a, b, c, d, f) {
  if (a>b && a>c && a>d && a>f)
{
    alert("The result is : " + a);
}
else if (b>a && b>c && b>d && b>f)
{
    alert("The result is : " + b);
}
else if (c>a && c>b && c>d && c>f)
{
    alert("The result is : " + c);
}
else if (d>a && d>c && d>b && d>f)
{
    alert("The result is : " + d);
}
else
{
    alert("The result is : " + f);
}
}

// JavaScript: Compute the average and grade of the students
function avg_students() {
  console.log("_________________________________________");
  console.log("JavaScript: Compute the average and grade of the students :");
  var students = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];

var Avgmarks = 0;

for (var i=0; i < students.length; i++) {
        Avgmarks += students[i][1];
        var avg = (Avgmarks/students.length);
}

alert("Average grade: " + (Avgmarks)/students.length);

        if (avg < 60){
          console.log("Grade : F");
          }
        else if (avg < 70) {
                console.log("Grade : D");
                  }
        else if (avg < 80)
             {
                console.log("Grade : C");
        } else if (avg < 90) {
                console.log("Grade : B");
        } else if (avg < 100) {
                console.log("Grade : A");
}
}

// JavaScript: Iterates the integers from 1 to 100
function iterateTo100() {
  console.log("_________________________________________");
  console.log("JavaScript: Iterates the integers from 1 to 100 :");
  for ( var i = 1; i <= 100; i++ )
{
  if ( i%3 === 0 && i%5 === 0 )
  {
    console.log( i + " FizzBuzz" );
  }
  else if ( i%3 === 0 )
  {
    console.log(i+ " Fizz" );
  }
  else if ( i%5 === 0 )
  {
    console.log(i+ " Buzz" );
  }
  else
  {
    console.log(i);
  }
}
}

// Find the armstrong numbers of 3 digits
function three_digit_armstrong_number()
{
  console.log("_________________________________________");
  console.log("Find the armstrong numbers of 3 digits :");
 for (var i = 1; i < 10; ++i)
 {
   for (var j = 0; j < 10; ++j)
     {
        for (var k = 0; k < 10; ++k)
        {
          var pow = (Math.pow(i,3) + Math.pow(j,3) + Math.pow(k,3));
          var plus = (i * 100 + j * 10 +  k);
          if (pow == plus)
           {

             console.log(pow);
            }
         }
       }
    }
  }

  // Construct a pattern, using a nested for loop
  function createPattern() {
    console.log("_________________________________________");
    console.log("Construct a pattern, using a nested for loop :");
    var x,y,chr;
  for(x=1; x <=6; x++)
  {
     for (y=1; y < x; y++)
       {
      chr=chr+("*");
        }
   console.log(chr);
   chr='';
  }
  }

  // Compute the greatest common divisor (GCD) of two positive integers
  function GCD() {
    console.log("_________________________________________");
    console.log("Compute the greatest common divisor (GCD) of two positive integers :");
    var a = 2154; //First number
    var b = 458;  //Second number
    var gcd;
    while (a!=b)
    {
	     if (a>b)
	      {
		        a = a -b;
	         }
	          else
	           {
		             b = b - a;
	              }
              }
              gcd = a;
              console.log(gcd);
            }

    // Sum the multiples of 3 and 5 under 1000
    function sumMultiple() {
      console.log("_________________________________________");
      console.log("Sum the multiples of 3 and 5 under 1000 :")
      var sum = 0;
for(var i = 1; i < 101; i++){
if(i % 3 === 0 || i % 5 === 0){
sum += i;
}
}
console.log(sum)
    }
