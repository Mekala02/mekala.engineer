const mediaQuery = window.matchMedia('(min-width: 1000px)')

document.getElementById("about_anchor").addEventListener("click", e => {
    document.getElementById("about_container").scrollIntoView(true);
})

document.getElementById("projects_anchor").addEventListener("click", e => {
    document.getElementById("car_container").scrollIntoView(true);
})

if (mediaQuery.matches) {
    var solidworks = document.getElementById("solidworks");
    var fusion = document.getElementById("fusion");
    var c = document.getElementById("c");
    var python = document.getElementById("python");
    var javasript = document.getElementById("javascript");
    var html = document.getElementById("html");
    var css = document.getElementById("css");

    var tensorflow = document.getElementById("tensorflow");
    var pytorch = document.getElementById("pytorch");
    var docker = document.getElementById("docker");
    var flask = document.getElementById("flask");

    solidworks.addEventListener("mouseover", function() {grow("85", "#e31818")});
    solidworks.addEventListener("mouseout", remove);

    fusion.addEventListener("mouseover", function() {grow("90", "#d8852f")});
    fusion.addEventListener("mouseout", remove);

    c.addEventListener("mouseover", function() {grow("70", "#00599d")});
    c.addEventListener("mouseout", remove);

    python.addEventListener("mouseover", function() {grow("80", "#ffde52")});
    python.addEventListener("mouseout", remove);

    javasript.addEventListener("mouseover", function() {grow("60", "#ffde52")});
    javasript.addEventListener("mouseout", remove);

    html.addEventListener("mouseover", function() {grow("90", "#dc4a25")});
    html.addEventListener("mouseout", remove);

    css.addEventListener("mouseover", function() {grow("85", "#244add")});
    css.addEventListener("mouseout", remove);

    pytorch.addEventListener("mouseover", function() {grow("75", "#e31818")});
    pytorch.addEventListener("mouseout", remove);

    tensorflow.addEventListener("mouseover", function() {grow("65", "#d8852f")});
    tensorflow.addEventListener("mouseout", remove);

    docker.addEventListener("mouseover", function() {grow("70", "#00599d")});
    docker.addEventListener("mouseout", remove);

    flask.addEventListener("mouseover", function() {grow("60", "#ffde52")});
    flask.addEventListener("mouseout", remove);

    const parentwidth = document.querySelector('#about').offsetWidth
    function grow(percentage, color){
        let width = (percentage * parentwidth / 100)
        var div = document.createElement("div");
        const parentheight = document.querySelector('#about').offsetHeight
        div.id = "temp";
        div.style.position = "absolute";
        div.style.display = "flex";
        div.style.margin = "0";
        div.style.height = parentheight + "px";
        div.style.backgroundColor = color;
        div.style.borderRadius = "30px 0 0 30px";
        div.style.color = "white";
        div.innerHTML = "%" + percentage;
        //div.style.fontSize = parentwidth + "%";
        div.style.fontSize = "1";
        div.style.alignItems = "center";
        div.style.justifyContent = "center";
        div.style.opacity = "0.0001";
        div.style.width = "0.0001px";
        div.style.pointerEvents = "none";
        document.getElementById("about").appendChild(div);
        //Animation
        div.animate(
            {
                width: width + "px",
                fontSize: parentwidth + "%",
                opacity: "0.8",
            }, 
            {
                // timing options
                duration: 500,
                fill: 'forwards'
            }
        );
    }

    function remove(){
        var temp = document.getElementById("temp");
        temp.remove();
    }
}

const projects_slide_counts = [[2], [2], [2], [2], [2], [2]];
const max_image_sizes = [];

function response_to_resize(){
    for (var p = 0; p < projects_slide_counts.length; p++){
        max_image_sizes[p] = {height: null, width: null}
        width = 0
        height = 0
        for (var i = 0; i < projects_slide_counts[p]; i++){
            id = "p" + p.toString() + "i" + i
            width = Math.max(width, document.getElementById(id).naturalWidth)
            height = Math.max(height, document.getElementById(id).naturalHeight)
        }
        if (height < document.documentElement.clientHeight)
            max_image_sizes[p]["height"] = height
        if (width < document.documentElement.clientWidth)
            max_image_sizes[p]["width"] = width
    }
}
console.log(max_image_sizes)
window.addEventListener("resize", response_to_resize)
response_to_resize()

for (var p = 0; p < projects_slide_counts.length; p++){
    try {
        document.getElementById("image_container_" + p).style.width = max_image_sizes[p]["width"] + "px"
        document.getElementById("image_container_" + p).style.height = max_image_sizes[p]["height"] + "px"
    } catch (error) {
        continue
    }
}

function change_slide(project, button){
    for (var i = 0; i < projects_slide_counts[project]; i++){
        if (i==button)
            continue
        id = "p" + project.toString() + "i" + i.toString()
        document.getElementById(id).style.display = "none"
    }
    id = "p" + project.toString() + "i" + button.toString()
    document.getElementById(id).style.display = "flex"
}

for (var p = 0; p < projects_slide_counts.length; p++){
    for (var b = 0; b < projects_slide_counts[p]; b++){
        id = "p" + p.toString() + "b" + b.toString()
        try {
            document.getElementById(id).addEventListener("click", change_slide.bind(null, p, b));           
        } catch (error) {
            continue
        }
    }
}