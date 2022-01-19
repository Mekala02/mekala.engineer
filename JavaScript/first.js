var item = document.querySelectorAll(".skilmark");
item[0].addEventListener("mouseover", func, false);
item[0].addEventListener("mouseout", func1, false);

var asd = "50"
let test = document.querySelector('#test');
let witdh = "10"
function func()
{
  var div = document.createElement("div");
  div.id = "temp";
  div.style.position = "absolute";
  div.style.margin = "0";
  div.style.height = "100%";
  div.style.backgroundColor = "#4900c9bb";
  div.style.borderRadius = "30px 0 0 0";
  div.style.color = "white";
  div.innerHTML = "%" + witdh;
  div.style.textAlign = "center";
  div.style.width = witdh + "%";
  document.getElementById("about").appendChild(div);
  div.animate({
    width: "300px", 
  }, 1500 );
}

function func1()
{
   var temp = document.getElementById("temp");
   temp.remove();
}
