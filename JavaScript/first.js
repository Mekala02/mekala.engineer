var solidworks = document.getElementById("solidworks");
var fusion = document.getElementById("fusion");
var c = document.getElementById("c");
var python = document.getElementById("python");
var html = document.getElementById("html");
var css = document.getElementById("css");
var nx = document.getElementById("nx");

solidworks.addEventListener("mouseover", placer, false);
solidworks.addEventListener("mouseout", remove, false);

fusion.addEventListener("mouseover", placer, false);
fusion.addEventListener("mouseout", remove, false);

c.addEventListener("mouseover", placer, false);
c.addEventListener("mouseout", remove, false);

python.addEventListener("mouseover", placer, false);
python.addEventListener("mouseout", remove, false);

html.addEventListener("mouseover", placer, false);
html.addEventListener("mouseout", remove, false);

css.addEventListener("mouseover", placer, false);
css.addEventListener("mouseout", remove, false);

nx.addEventListener("mouseover", placer, false);
nx.addEventListener("mouseout", remove, false);

function placer()
{
  func("100", "#49ffc9bb")
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
  div.style.width = "1px";
  document.getElementById("about").appendChild(div);
  div.animate({
    width: width + "px",
  }, {
    // timing options
    duration: 1000,
    fill: 'forwards'
  } );
}

function remove()
{
   var temp = document.getElementById("temp");
   temp.remove();
}
