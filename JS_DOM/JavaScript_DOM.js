// Modify paragraph text style through javascript code using button
function js_style()
{
//font styles added by JS:
 text.style.fontSize = "14pt";
 text.style.fontFamily = "Comic Sans MS";
 text.style.color = "green";
}

// Store and display the values of text boxes of a form
function getFormvalue()
{
  var x=document.getElementById("form1");
  for (var i=0;i<x.length;i++)
  {
   if (x.elements[i].value!='Submit')
    {
      document.getElementById("result_getFormvalue").innerHTML = (x.elements[i].value);
     }
   }
}

// Set the background color of a paragraph
function set_background() {
 docBody = document.getElementsByTagName("body")[0];
  //Get all the p elements that are descendants of the body
  myBodyElements = docBody.getElementsByTagName("p");
// get the first p elements
  myp1 = myBodyElements[0];
  myp1.style.background = "rgb(255,0,0)";
// get the second p elements
  myp2 = myBodyElements[1];
  myp2.style.background = "rgb(255,255,0)";
}

// Collect the value of href, hreflang, rel, target, and type attributes of a link
function getAttributes()
{
 var u = document.getElementById("w3r").href;
 alert('The value of the href attribute of the link is : '+u);
 var v = document.getElementById("w3r").hreflang;
 alert('The value of the hreflang attribute of the link is : '+v);
 var w = document.getElementById("w3r").rel;
  alert('The value of the rel attribute of the link is : '+w);
 var x = document.getElementById("w3r").target;
  alert('The value of the taget attribute of the link is : '+x);
 var y = document.getElementById("w3r").type;
  alert('The value of the type attribute of the link is : '+y);
}

// JavaScript function to add rows to a table
function insert_Row()
{
var x=document.getElementById('sampleTable').insertRow(0);
var y = x.insertCell(0);
var z = x.insertCell(1);
y.innerHTML="New Cell1";
z.innerHTML="New Cell2";
}

// Create a function to update the content of a specific cell of a table
function changeContent()
{
rn = window.prompt("Input the Row number(0,1,2)", "0");
cn = window.prompt("Input the Column number(0,1)","0");
content = window.prompt("Input the Cell content");
var x=document.getElementById('myTable').rows[parseInt(rn,10)].cells;
x[parseInt(cn,10)].innerHTML=content;
}

// Create a user defined table, accepting rows and columns
function createTable()
{
rn = window.prompt("Input number of rows", 1);
cn = window.prompt("Input number of columns",1);

 for(var r=0;r<parseInt(rn,10);r++)
  {
   var x=document.getElementById('myTable1').insertRow(r);
   for(var c=0;c<parseInt(cn,10);c++)
    {
     var y=  x.insertCell(c);
     y.innerHTML="Row-"+r+" Column-"+c;
    }
   }
}

// Remove items from a dropdown list
function removecolor()
{
var x=document.getElementById("colorSelect");
x.remove(x.selectedIndex);
}

// Count and display the items of a dropdown list, in an alert window
function getOptions()
{
var x=document.getElementById("colorSelect");
var txt1 = "No. of items : ";
var i;
l=document.getElementById("colorSelect").length;
txt1 = txt1+l;
for (i=0;i<x.length;i++)
  {
    txt1 = txt1 + "\n" + x.options[i].text;
  }
alert(txt1);
}

// Calculate the volume of a sphere
function volume_sphere()
 {
  var volume;
  var radius = document.getElementById('radius').value;
  radius = Math.abs(radius);
  volume = (4/3) * Math.PI * Math.pow(radius, 3);
  volume = volume.toFixed(4);
  document.getElementById('volume').value = volume;
  return false;
 }
window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;

// Display a random image by clicking on a button
function display_random_image()
{
     var theImages = [{
        src: "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg",
        width: "240",
        height: "160"
    }, {
        src: "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg",
        width: "320",
        height: "195"
    }, {
        src: "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg",
        width: "500",
        height: "343"
    }];

    var preBuffer = [];
    for (var i = 0, j = theImages.length; i < j; i++) {
        preBuffer[i] = new Image();
        preBuffer[i].src = theImages[i].src;
        preBuffer[i].width = theImages[i].width;
        preBuffer[i].height = theImages[i].height;
    }

// create random image number
  function getRandomInt(min,max)
    {
      //  return Math.floor(Math.random() * (max - min + 1)) + min;

imn = Math.floor(Math.random() * (max - min + 1)) + min;
    return preBuffer[imn];
    }

// 0 is first image,   preBuffer.length - 1) is  last image

var newImage = getRandomInt(0, preBuffer.length - 1);

// remove the previous images
var images = document.getElementsByTagName('img');
var l = images.length;
for (var p = 0; p < l; p++) {
    images[0].parentNode.removeChild(images[0]);
}
// display the image
document.body.appendChild(newImage);
}

// Highlight the bold words of a paragraph, on mouse over a certain link
//First create a list of all bold items
var bold_Items;
window.onload = getBold_items();

// Collect all <strong> tags
function getBold_items()
{
  bold_Items = document.getElementsByTagName('strong');
}
// iterate all bold tags and change color
function highlight()
{
   for (var i=0; i<bold_Items.length; i++)
   {
    bold_Items[i].style.color = "green";
    }
}

// On mouse out highlighted words become black
function return_normal()
{
  for (var i=0; i<bold_Items.length; i++)
  {
       bold_Items[i].style.color = "black";
  }
}

// Get the width and height of a window online
function getSize()
{
var w = document.documentElement.clientWidth;
var h = document.documentElement.clientHeight;

// put the result into a h1 tag
 document.getElementById('wh').innerHTML = "<h1>Width: " + w + " â€¢ Height: " + h + "</h1>";
}