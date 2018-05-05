// Show console.log in the HTML file
window.console = {
  log: function(str){
    var node = document.createElement("div");
    node.appendChild(document.createTextNode(str));
    document.getElementById("myLog").appendChild(node);
  }
}
console.log("JavaScript_Validation: ");
console.log("                      ");
// Validate whether a given value type is Boolean or not
function is_boolean(value)
        {
        return value === true || value === false || toString.call(value) === '[object Boolean]';
       }
console.log("_________________________________________");
console.log("Validate whether a given value type is Boolean or not :");
console.log(is_boolean(true));
console.log(is_boolean('bar'));

// Validate whether a given value type is error or not
function is_nan(val)
        {
        return val !== val;
       }
console.log("_________________________________________");
console.log("Validate whether a given value type is error or not :");
console.log(is_nan(NaN));
console.log(is_nan('bar'));

// Validate whether a given value type is NaN or not
function is_nan(val)
        {
        return val !== val;
       }
console.log("_________________________________________");
console.log("Validate whether a given value type is NaN or not :");
console.log(is_nan(NaN));
console.log(is_nan('bar'));

// Validate whether a given value type is null or not
function is_null(val)
        {
        return val === null;
       }

console.log("_________________________________________");
console.log("Validate whether a given value type is null or not :");
console.log(is_null(null));
console.log(is_null('bar'));

// Validate whether a given value is number or not
function is_number(value)
        {
        return !isNaN(value) && toString.call(value) === '[object Number]';
       }
console.log("_________________________________________");
console.log("Validate whether a given value is number or not :");
console.log(is_number(NaN));
console.log(is_number(42.32));
console.log(is_number(72));

// Validate whether a given value type is pure json object or not
function is_json(value)
        {
        return toString.call(value) === '[object Object]';
        }
console.log("_________________________________________");
console.log("Validate whether a given value type is pure json object or not :");
console.log(is_json({name: 'Robert'}));
console.log(is_json('bar'));
console.log(is_json(72));

// Validate whether a given value type is pure json object or not
function is_json(value)
        {
        return toString.call(value) === '[object Object]';
        }
console.log("_________________________________________");
console.log("Validate whether a given value type is pure json object or not :");
console.log(is_json({name: 'Robert'}));
console.log(is_json('bar'));
console.log(is_json(72));

// Validate whether a given value RegExp or not
function is_regexp(value)
        {
       return toString.call(value) === '[object RegExp]';
        }
console.log("_________________________________________");
console.log("Validate whether a given value RegExp or not :");
console.log(is_regexp(/test/));
console.log(is_regexp('bar'));
console.log(is_regexp(72));

// Validate whether a given value type is char or not
function is_char(value)
    {
      if (Object.prototype.toString.call(value) !== '[object String]')
        return false;
    return value && value.length === 1;
    }
console.log("_________________________________________");
console.log("Validate whether a given value type is char or not :");
console.log(is_char('f'));
console.log(is_char('*'));

// Check whether given value types are same or not
function is_sameType(value1, value2) {
        if(is_nan(value1) || is_nan(value2)) {
         return is_nan(value1) === is_nan(value2);
        }
        return toString.call(value1) === toString.call(value2);
    }

function is_nan(val)
        {
        return val !== val;
       }
console.log("_________________________________________");
console.log("Check whether given value types are same or not :");
console.log(is_sameType('12', 100));
console.log(is_sameType('12', '100'));
console.log(is_sameType(12, 100));
