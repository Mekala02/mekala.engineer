var solidworks = document.getElementById("solidworks");
var fusion = document.getElementById("fusion");
var c = document.getElementById("c");
var python = document.getElementById("python");
var html = document.getElementById("html");
var css = document.getElementById("css");
var nx = document.getElementById("nx");

solidworks.addEventListener("mouseover", func, false);
solidworks.addEventListener("mouseout", func1, false);

fusion.addEventListener("mouseover", func, false);
fusion.addEventListener("mouseout", func1, false);

c.addEventListener("mouseover", func, false);
c.addEventListener("mouseout", func1, false);

python.addEventListener("mouseover", func, false);
python.addEventListener("mouseout", func1, false);

html.addEventListener("mouseover", func, false);
html.addEventListener("mouseout", func1, false);

css.addEventListener("mouseover", func, false);
css.addEventListener("mouseout", func1, false);

nx.addEventListener("mouseover", func, false);
nx.addEventListener("mouseout", func1, false);

let test = document.querySelector('#test');
const parentwidth = document.querySelector('#about').offsetWidth
let skill = "80"
let width = (skill * parentwidth / 100)
function func()
{
  var div = document.createElement("div");
  const parentheight = document.querySelector('#about').offsetHeight
  div.id = "temp";
  div.style.position = "absolute";
  div.style.margin = "0";
  div.style.height = parentheight + "px";
  div.style.backgroundColor = "#4900c9bb";
  div.style.borderRadius = "30px 0 0 30px";
  div.style.color = "white";
  div.innerHTML = "%" + skill;
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

function func1()
{
   var temp = document.getElementById("temp");
   temp.remove();
}
