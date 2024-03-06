const mediaQuery = window.matchMedia('(min-width: 1000px)')

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
    
    css.addEventListener("mouseover", function() {grow("80", "#244add")});
    css.addEventListener("mouseout", remove);
    
    pytorch.addEventListener("mouseover", function() {grow("75", "#e31818")});
    pytorch.addEventListener("mouseout", remove);
    
    tensorflow.addEventListener("mouseover", function() {grow("65", "#d8852f")});
    tensorflow.addEventListener("mouseout", remove);
    
    docker.addEventListener("mouseover", function() {grow("70", "#00599d")});
    docker.addEventListener("mouseout", remove);
    
    flask.addEventListener("mouseover", function() {grow("60", "#ffde52")});
    flask.addEventListener("mouseout", remove);

    ros.addEventListener("mouseover", function() {grow("60", "#ffde52")});
    ros.addEventListener("mouseout", remove);
    
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
        // document.getElementById("about").appendChild(div);
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
    
    document.getElementById("about_anchor").addEventListener("click", e => {
        document.getElementById("about_container").scrollIntoView(true);
    })
    
    document.getElementById("projects_anchor").addEventListener("click", e => {
        document.getElementById("car_container").scrollIntoView(true);
    })

    // How many images are there
    const projects_image_counts = [[2], [2], [5], [5], [3], [2], [3]];
    // p: project, b: button, i: image
    function change_slide(p, b){
        image_container = document.getElementById("p"+p.toString());
        height = image_container.clientHeight;
        width = image_container.clientWidth;
        image_container.src="images/p" + p.toString() + "i" + b.toString() + ".png";
        image_container.style.width = width + "px";
        image_container.style.height = height + "px";
        // ub: unselected button
        for(var ub = 0; ub < projects_image_counts[p]; ub++){
            document.getElementById("p"+p.toString()+"b"+ub.toString()).style.opacity = ".5";
        }
        selected_button = document.getElementById("p"+p.toString()+"b"+b.toString());
        selected_button.style.opacity = "1";
    }
    
    for (var p = 0; p < projects_image_counts.length; p++){
        for (var b = 0; b < projects_image_counts[p]; b++){
            button = document.getElementById("p" + p.toString() + "b" + b.toString());
            button.addEventListener("click", change_slide.bind(null, p, b));
            if (b==0)
                button.style.opacity = "1";
        }
    }