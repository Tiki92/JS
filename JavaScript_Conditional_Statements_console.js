// JavaScript: For loop that will iterate from 0 to 15 to find even and odd numbers
function iterateEvenOdd() {
  console.log("JavaScript: For loop that will iterate from 0 to 15 to find even and odd numbers :");
  for (var x=0; x<=15; x++) {
        if (x === 0) {
                console.log(x +  " is even");
        }
        else if (x % 2 === 0) {
                console.log(x + " is even");
        }
        else {
                console.log(x + " is odd");
        }
}
}
// Find and print the first 5 happy numbers
function happy_number(num)
{
    var m, n ;
    var c = [] ;

    while(num != 1 && c[num] !== true)
    {
        c[num] = true ;
        m = 0 ;
        while (num > 0) {
            n = num % 10 ;
            m += n * n ;
            num = (num  - n) / 10 ;
        }
        num = m ;
    }
    return (num == 1) ;
}

var cnt = 5;
var num = 1;
var f5 = '';
while(cnt-- > 0)
{
    while(!happy_number(num))
        num++ ;
f5 = f5+(num + ", ") ;

    num++ ;
}
console.log("Find and print the first 5 happy numbers :")
console.log('First 5 happy numbers are : '+f5);
