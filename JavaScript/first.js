var item = document.querySelectorAll(".skilmark");

for (let i = 0; i < item.length; i++) {
  item[i].addEventListener("mouseover", func, false);
  item[i].addEventListener("mouseout", func1, false);
}




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
