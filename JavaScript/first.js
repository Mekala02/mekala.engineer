var solidworks = document.getElementById("solidworks");
var fusion = document.getElementById("fusion");
var c = document.getElementById("c");
var python = document.getElementById("python");
var html = document.getElementById("html");
var css = document.getElementById("css");
var nx = document.getElementById("nx");

solidworks.addEventListener("mouseover", placersolidworks, false);
solidworks.addEventListener("mouseout", remove, false);

fusion.addEventListener("mouseover", placerfusion, false);
fusion.addEventListener("mouseout", remove, false);

c.addEventListener("mouseover", placerc, false);
c.addEventListener("mouseout", remove, false);

python.addEventListener("mouseover", placerpython, false);
python.addEventListener("mouseout", remove, false);

html.addEventListener("mouseover", placerhtml, false);
html.addEventListener("mouseout", remove, false);

css.addEventListener("mouseover", placercss, false);
css.addEventListener("mouseout", remove, false);

nx.addEventListener("mouseover", placernx, false);
nx.addEventListener("mouseout", remove, false);

function placersolidworks()
{
  func("85", "#e31818bb")
}
function placerfusion()
{
  func("90", "#d8852fbb")
}
function placerc()
{
  func("60", "#00599dbb")
}
function placerpython()
{
  func("60", "#ffde52bb")
}
function placerhtml()
{
  func("80", "#dc4a25bb")
}
function placercss()
{
  func("60", "#244addbb")
}
function placernx()
{
  func("60", "#029999bb")
}

const parentwidth = document.querySelector('#about').offsetWidth
function func(percentage, color)
{
  let width = (percentage * parentwidth / 100)
  var div = document.createElement("div");
  const parentheight = document.querySelector('#about').offsetHeight
  div.id = "temp";
  div.style.position = "absolute";
  div.style.margin = "0";
  div.style.height = parentheight + "px";
  div.style.backgroundColor = color;
  div.style.borderRadius = "30px 0 0 30px";
  div.style.color = "white";
  div.innerHTML = "%" + percentage;
  div.style.textAlign = "center";
  div.style.width = "0.001px";
  document.getElementById("about").appendChild(div);
  div.animate({
    width: width + "px",
  }, {
    // timing options
    duration: 500,
    fill: 'forwards'
  } );
}

function remove()
{
   var temp = document.getElementById("temp");
   temp.remove();
}
