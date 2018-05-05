// Show console.log in the HTML file
window.console = {
  log: function(str){
    var node = document.createElement("div");
    node.appendChild(document.createTextNode(str));
    document.getElementById("myLog").appendChild(node);
  }
}
console.log("JavaScript_Object: ");
console.log("                      ");
// List the properties of a JavaScript object
function _keys(obj)
 {
    if (!isObject(obj)) return [];
    if (Object.keys) return Object.keys(obj);
    var keys = [];
    for (var key in obj) if (_.has(obj, key)) keys.push(key);
    return keys;
  }
function isObject(obj)
{
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  }
console.log("_________________________________________");
console.log("List the properties of a JavaScript object :");
console.log(_keys({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}));

// Delete a property from an object and print before or after deleting
var student =  {
  name : "David Rayy",
  sclass : "VI",
  rollno : 12  };
console.log("_________________________________________");
console.log("Delete a property from an object and print before or after deleting :");
console.log(student);
delete student.rollno;
console.log(student);

// Find the length of an object
Object.objsize = function(Myobj) {
    var osize = 0, key;
    for (key in Myobj) {
        if (Myobj.hasOwnProperty(key)) osize++;
    }
    return osize;
};

var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };

var objsize = Object.objsize(student);
console.log("_________________________________________");
console.log("Find the length of an object :");
console.log('Size of the current object : '+objsize);

// Gather and display infromation from an object
console.log("_________________________________________");
console.log("Gather and display infromation from an object :");
var library = [
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        readingStatus: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }];

for (var i = 0; i < library.length; i++)
   {
    var book = "'" + library[i].title + "'" + ' by ' + library[i].author + ".";
    if (library[i].readingStatus) {
      console.log("Already read " + book);
    } else
    {
     console.log("You still need to read " + book);
    }
   }

// Calculate the volume of a Cylinder
function Cylinder(cyl_height, cyl_diameter) {
  this.cyl_height = cyl_height;
  this.cyl_diameter = cyl_diameter;
}

Cylinder.prototype.Volume = function () {
  var radius = this.cyl_diameter / 2;
  return this.cyl_height * Math.PI * radius * radius;
};

var cyl = new Cylinder(7, 4);
// Volume of the cylinder with four decimal places.
console.log("_________________________________________");
console.log("Calculate the volume of a Cylinder :");
console.log('volume =', cyl.Volume().toFixed(4));

// Sort an array using Bubble Sorting method
Array.prototype.bubbleSort_algo = function()
{
var is_sorted = false;
 while (!is_sorted)
 {
    is_sorted = true;
    for (var n = 0; n < this.length - 1; n++)
    {
      if (this[n] > this[n+1]){
        var x = this[n+1];
        this[n+1] = this[n];
        this[n] = x;
        is_sorted = false;
      }
    }
  }
  return this;
};
console.log("_________________________________________");
console.log("Sort an array using Bubble Sorting method :");
console.log([6,4,0, 3,-2,1].bubbleSort_algo());

// Returns a subset of a string
String.prototype.sub_String = function()
{
  var subset = [];
  for (var m = 0; m < this.length; m++)
  {
    for (var n = m+1; n<this.length+1; n++)
    {
      subset.push(this.slice(m,n));
    }
  }
  return subset;
};
console.log("_________________________________________");
console.log("Returns a subset of a string :");
console.log("dog".sub_String());

// Create a clock and display the time in each second
function my_Clock()
  {
  this.cur_date = new Date();
  this.hours = this.cur_date.getHours();
  this.minutes = this.cur_date.getMinutes();
  this.seconds = this.cur_date.getSeconds();
  }
my_Clock.prototype.run = function ()
  {
  setInterval(this.update.bind(this), 1000);
  };
my_Clock.prototype.update = function ()
  {
  this.updateTime(1);
  document.getElementById("result_clock").innerHTML = (this.hours + ":" + this.minutes + ":" + this.seconds);
  };
my_Clock.prototype.updateTime = function (secs)
  {
  this.seconds+= secs;
 if (this.seconds >= 60)
  {
  this.minutes++;
  this.seconds= 0;
  }
 if (this.minutes >= 60)
  {
  this.hours++;
  this.minutes=0;
  }
if (this.hours >= 24)
  {
  this.hours = 0;
  }
};
var clock = new my_Clock();

// Calculate the area and perimeter of a circle
function circle(radius)
{
    this.radius = radius;
  // area method
    this.area = function ()
    {
        return Math.PI * this.radius * this.radius;
    };
  // perimeter method
    this.perimeter = function ()
    {
        return 2*Math.PI*this.radius;
    };
}
var c = new circle(3);
console.log("_________________________________________");
console.log("Calculate the area and perimeter of a circle :");
console.log('Area =', c.area().toFixed(2));
console.log('perimeter =', c.perimeter().toFixed(2));

// Sort an array of JavaScript objects
var library = [
   {
       title: 'Bill Gates',
       author: 'The Road Ahead',
       libraryID: 1254
   },
   {
       title: 'Steve Jobs',
       author: 'Walter Isaacson',
       libraryID: 4264
   },
   {
       title: 'Mockingjay: The Final Book of The Hunger Games',
       author: 'Suzanne Collins',
       libraryID: 3245
   }];

var sort_by = function(field_name, reverse, initial){

   var key = initial ?
       function(x)
             {
               return initial(x[field_name]);
             } :
       function(x)
             {
               return x[field_name];
             };

   reverse = !reverse ? 1 : -1;

   return function (x, y) {
       return x = key(x), y = key(y), reverse * ((x > y) - (y > x));
     } ;
};


var newobj = library.sort(sort_by('libraryID', true, parseInt));
console.log("_________________________________________");
console.log("Sort an array of JavaScript objects :");
console.log(newobj);


// Print all the methods in an JavaScript object
function all_properties(obj)
{
 return Object.getOwnPropertyNames(obj);
}
console.log("_________________________________________");
console.log("Print all the methods in an JavaScript object :");
console.log(all_properties(Math));
console.log(all_properties(Array));

// Parse an URL
function parse_URL(url) {
    var a = document.createElement('a');
    a.href = url;
    return {
        source: url,
        protocol: a.protocol.replace(':', ''),
        host: a.hostname,
        port: a.port,
        query: a.search,
        params: (function () {
            var ret = {},
                seg = a.search.replace(/^\?/, '').split('&'),
                len = seg.length,
                i = 0,
                s;
            for (; i < len; i++) {
                if (!seg[i]) {
                    continue;
                }
                s = seg[i].split('=');
                ret[s[0]] = s[1];
            }
            return ret;
        })(),
        file: (a.pathname.match(/\/([^\/?#]+)$/i) || [, ''])[1],
        hash: a.hash.replace('#', ''),
        path: a.pathname.replace(/^([^\/])/, '/$1'),
        relative: (a.href.match(/tps?:\/\/[^\/]+(.+)/) || [, ''])[1],
        segments: a.pathname.replace(/^\//, '').split('/')
    };
}
console.log("_________________________________________");
console.log("Parse an URL :");
console.log(parse_URL('https://github.com/pubnub/python/search?utf8=%E2%9C%93&q=python'));

// Retrieve all the names of object's own and inherited properties
function allKeys(obj) {
    if (!isObject(obj)) return [];
    var keys = [];
    for (var key in obj) keys.push(key);
    return keys;
}
function isObject(obj)
{
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  }
function Student(name) {
  this.name = name;
}
console.log("_________________________________________");
console.log("Retrieve all the names of object's own and inherited properties :");
Student.prototype.rollno = true;
console.log(allKeys(new Student("Sara")));

// JavaScript: Retrieve all the values of an object's properties
function all_values(obj) {
    var keys = _keys(obj);
    var length = keys.length;
    var values = Array(length);
    for (var i = 0; i < length; i++) {
      values[i] = obj[keys[i]];
    }
    return values;
  }
function _keys(obj)
 {
    if (!isObject(obj)) return [];
    if (Object.keys) return Object.keys(obj);
    var keys = [];
    for (var key in obj) if (_.has(obj, key)) keys.push(key);
    return keys;
  }
function isObject(obj)
{
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  }
console.log("_________________________________________");
console.log("JavaScript: Retrieve all the values of an object's properties :");
console.log(all_values({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}));

// Convert an object into a list of pairs
function key_value_pairs(obj)
   {
    var keys = _keys(obj);
    var length = keys.length;
    var pairs = Array(length);
    for (var i = 0; i < length; i++)
    {
      pairs[i] = [keys[i], obj[keys[i]]];
    }
    return pairs;
  }

function _keys(obj)
  {
    if (!isObject(obj)) return [];
    if (Object.keys) return Object.keys(obj);
    var keys = [];
    for (var key in obj) if (_.has(obj, key)) keys.push(key);
    return keys;
  }
function isObject(obj)
 {
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  }
console.log("_________________________________________");
console.log("Convert an object into a list of pairs :");
console.log(key_value_pairs({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}));

// Get a copy of the object where the keys have become the values and the values the keys
function invert_key_value(obj) {
    var result = {};
    var keys = _keys(obj);
    for (var i = 0, length = keys.length; i < length; i++) {
      result[obj[keys[i]]] = keys[i];
    }
    return result;
  }
function _keys(obj)
  {
    if (!isObject(obj)) return [];
    if (Object.keys) return Object.keys(obj);
    var keys = [];
    for (var key in obj) if (_.has(obj, key)) keys.push(key);
    return keys;
  }
function isObject(obj)
 {
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  }
console.log("_________________________________________");
console.log("Get a copy of the object where the keys have become the values and the values the keys :");
console.log(invert_key_value({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}));

// Check if an object contains specified property
function hasKey(obj, key) {
    return obj != null && hasOwnProperty.call(obj, key);
  }
console.log("_________________________________________");
console.log("Check if an object contains specified property :");
console.log(hasKey({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}, "green"));

// Check whether a specified value is a DOM element
function is_dom_element(obj) {
    return !!(obj && obj.nodeType === 1);
  }
console.log("_________________________________________");
console.log("Check whether a specified value is a DOM element :");
console.log(is_dom_element(('body')[0]));
