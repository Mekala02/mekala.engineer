var item = document.querySelectorAll(".skilmark");
item[0].addEventListener("mouseover", func, false);
item[0].addEventListener("mouseout", func1, false);

let test = document.querySelector('#test');
let witdh = "50"
function func()
{
  var div = document.createElement("div");
  const height = document.querySelector('#about').offsetHeight
  div.id = "temp";
  div.style.position = "absolute";
  div.style.margin = "0";
  div.style.height = height + "px";
  div.style.backgroundColor = "#4900c9bb";
  div.style.borderRadius = "30px 0 0 30px";
  div.style.color = "white";
  div.innerHTML = "%" + witdh;
  div.style.textAlign = "center";
  div.style.width = "1px";
  document.getElementById("about").appendChild(div);
  div.animate({
    width: witdh + "%",
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
