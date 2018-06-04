// Check whether the first character of a string is uppercase or not
function upper_case()
{
  var str = document.getElementById("word_upper_case").value;
   regexp = /^[A-Z]/;
   if (regexp.test(str))
    {
      document.getElementById("result_upper_case").innerHTML = "The result is : " + ("String's first character is uppercase");
    }
    else
    {
      document.getElementById("result_upper_case").innerHTML = "The result is : " + ("String's first character is not uppercase");
    }
}

// Check whether a credit card number format is like 9999-9999-9999-9999
function is_creditCard()
{
  var str = document.getElementById("card_is_creditCard").value;
 regexp = /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/;

        if (regexp.test(str))
          {
            document.getElementById("result_is_creditCard").innerHTML = "The result is : " + true;
          }
        else
          {
            document.getElementById("result_is_creditCard").innerHTML = "The result is : " + false;
          }
}

// Check whether the pattern of an e-mail address matches a specific format
function valid_email()
{
var str = document.getElementById("email_valid_email").value;
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(mailformat.test(str))
{
document.getElementById("result_valid_email").innerHTML = "The result is : " + ("Valid email address!");
}
else
{
document.getElementById("result_valid_email").innerHTML = "The result is : " + ("You have entered an invalid email address!");
}
}

// Search a date within a string
function is_dateString()
{
  var str = document.getElementById("date_is_dateString").value;
 regexp = /^(1[0-2]|0?[1-9])\/(3[01]|[12][0-9]|0?[1-9])\/(?:[0-9]{2})?[0-9]{2}$/;

        if (regexp.test(str))
          {
            document.getElementById("result_is_dateString").innerHTML = "The result is : " + true;
          }
        else
          {
            document.getElementById("result_is_dateString").innerHTML = "The result is : " + false;
          }
}

// Alternet of trim function using regular expression
function Trim()
{
  var str = document.getElementById("word_Trim").value;
  var result;
  if (typeof str === 'string')
  {
    result = str.replace(/^\s+|\s+$/g, '');
    document.getElementById("result_Trim").innerHTML = "The result is : " + result;
  }
  else
  {
    document.getElementById("result_Trim").innerHTML = "The result is : " + false;
  }
}

// Count number of words in string
function count_words()
{
str1= document.getElementById("sentence_count_words").value;
//exclude  start and end white-space
str1 = str1.replace(/(^\s*)|(\s*$)/gi,"");
//convert 2 or more spaces to 1
str1 = str1.replace(/[ ]{2,}/gi," ");
// exclude newline with a start spacing
str1 = str1.replace(/\n /,"\n");
document.getElementById("result_count_words").innerHTML =  "The number of Words is : " + str1.split(' ').length;
}

// Check whether a given value is IP value or not
function is_IP()
{
  var str = document.getElementById("IP_is_IP").value;
 regexp =  /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$|^(([a-zA-Z]|[a-zA-Z][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z]|[A-Za-z][A-Za-z0-9\-]*[A-Za-z0-9])$|^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/;

        if (regexp.test(str))
          {
            document.getElementById("result_is_IP").innerHTML = "The result is :" + true;
          }
        else
          {
            document.getElementById("result_is_IP").innerHTML = "The result is : " + false;
          }
}

// Count the number of vowels in a given string
function vowel_count() {
  var str = document.getElementById("sentence_vowel_count").value;
  document.getElementById("result_vowel_count").innerHTML = "The result is : " + str.match(/[aeiou]/gi).length;
}

// Check whether a given value is an valid url or not
function is_url()
{
  var str = document.getElementById("url_is_url").value;
  regexp =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
        if (regexp.test(str))
        {
          document.getElementById("result_is_url").innerHTML = "The result is : " + true;
        }
        else
        {
          document.getElementById("result_is_url").innerHTML = "The result is : " + false;
        }
}

// Check whether a given value is alpha numeric or not
function is_alphaNumeric()
{
  var str = document.getElementById("something_is_alphaNumeric").value;
 regexp = /^[A-Za-z0-9]+$/;

        if (regexp.test(str))
          {
            document.getElementById("result_is_alphaNumeric").innerHTML = "The result is : " + true;
          }
        else
          {
            document.getElementById("result_is_alphaNumeric").innerHTML = "The result is : " + false;
          }
}

// Check whether a given value is time string or not
function is_timeString()
{
  var str = document.getElementById("time_is_timeString").value;
 regexp = /^(2[0-3]|[01]?[0-9]):([0-5]?[0-9]):([0-5]?[0-9])$/;

        if (regexp.test(str))
          {
            document.getElementById("result_is_timeString").innerHTML = "The result is : " + true;
          }
        else
          {
            document.getElementById("result_is_timeString").innerHTML = "The result is : " + false;
          }
}

// Check whether a given value is US zip code or not
function is_usZipCode()
{
  var str = document.getElementById("zip_is_usZipCode").value;
 regexp = /^[0-9]{5}(?:-[0-9]{4})?$/;

        if (regexp.test(str))
          {
            document.getElementById("result_is_usZipCode").innerHTML = "The result is : " + true;
          }
        else
          {
            document.getElementById("result_is_usZipCode").innerHTML = "The result is : " + false;
          }
}

// Check whether a given value is UK Post Code or not
function is_ukPostCode()
{
  var str = document.getElementById("zip_is_ukPostCode").value;
 regexp = /^[A-Z]{1,2}[0-9RCHNQ][0-9A-Z]?\s?[0-9][ABD-HJLNP-UW-Z]{2}$|^[A-Z]{2}-?[0-9]{4}$/;

        if (regexp.test(str))
          {
            document.getElementById("result_is_ukPostCode").innerHTML = "The result is : " + true;
          }
        else
          {
            document.getElementById("result_is_ukPostCode").innerHTML = "The result is : " + false;
          }
}

// Check whether a given value is Canada Post Code or not
function is_caPostalCode()
{
  var str = document.getElementById("zip_is_caPostalCode").value;
 regexp = /^(?!.*[DFIOQU])[A-VXY][0-9][A-Z]\s?[0-9][A-Z][0-9]$/;

        if (regexp.test(str))
          {
            document.getElementById("result_is_caPostalCode").innerHTML = "The result is : " + true;
          }
        else
          {
            document.getElementById("result_is_caPostalCode").innerHTML = "The result is : " + false;
          }
}

// Check whether a given value is a social security number or not
function is_social_SC()
{
  var str = document.getElementById("SC_is_social_SC").value;
 regexp = /^(?!000|666)[0-8][0-9]{2}-(?!00)[0-9]{2}-(?!0000)[0-9]{4}$/;

        if (regexp.test(str))
          {
            document.getElementById("result_is_social_SC").innerHTML = "The result is : " + true;
          }
        else
          {
            document.getElementById("result_is_social_SC").innerHTML = "The result is : " + false;
          }
}

// Check whether a given value is hexadecimal value or not
function is_hexadecimal() {
  var str = document.getElementById("str_is_hexadecimal").value;
  regexp = /^[0-9a-fA-F]+$/;

       if (regexp.test(str))
         {
           document.getElementById("result_is_hexidecimal").innerHTML = "The result is : " + true;
         }
       else
         {
           document.getElementById("result_is_hexidecimal").innerHTML = "The result is : " + false;
         }
}

// Check whether a given value is hexcolor value or not
function is_hexcolor() {
  var str = document.getElementById("str_is_hexcolor").value;
  regexp = /^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;

       if (regexp.test(str))
         {
           document.getElementById("result_is_hexcolor").innerHTML = "The result is : " + true;
         }
       else
         {
           document.getElementById("result_is_hexcolor").innerHTML = "The result is : " + false;
         }
}

// Check whether a given value represents a domain or not
function is_domain() {
  var str = document.getElementById("str_is_domain").value;
  regexp = /^[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,6}$/i;

       if (regexp.test(str))
         {
           document.getElementById("result_is_domain").innerHTML = "The result is : " + true;
         }
       else
         {
           document.getElementById("result_is_domain").innerHTML = "The result is : " + false;
         }
}

// Check whether a given value is html or not
function is_html() {
  var str = document.getElementById("str_is_html").value;
  regexp = /<([a-z]+) *[^/]*?>/;

       if (regexp.test(str))
         {
           document.getElementById("result_is_html").innerHTML = "The result is : " + true;
         }
       else
         {
           document.getElementById("result_is_html").innerHTML = "The result is : " + false;
         }
}

// Check a given value contains alpha, dash and underscore
function is_alphaDash() {
  var str = document.getElementById("something_is_alphaDash").value;
  regexp = /^[a-z0-9_\-]+$/i;

       if (regexp.test(str))
         {
           document.getElementById("result_is_alphaDash").innerHTML = "The result is : " + true;
         }
       else
         {
           document.getElementById("result_is_alphaDash").innerHTML = "The result is : " + false;
         }
}

// Print an integer with commas as thousands separators
function thousands_separators() {
  var num = document.getElementById("num_thousands_separators").value;

  var num_parts = num.toString().split(".");
 num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
 document.getElementById("result_thousands_separators").innerHTML = "The result is : " + num_parts.join(".");
}
