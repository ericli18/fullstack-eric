function changecolors(){
    let x = Math.floor(Math.random()*255);
    let y = Math.floor(Math.random()*255);
    let z = Math.floor(Math.random()*255);
    document.getElementById("color1").style.backgroundColor = "rgb("+x+","+y+","+z+")";

    x = Math.floor(Math.random()*255);
    y = Math.floor(Math.random()*255);
    z = Math.floor(Math.random()*255);
    document.getElementById("color2").style.backgroundColor = "rgb("+x+","+y+","+z+")";

    x = Math.floor(Math.random()*255);
    y = Math.floor(Math.random()*255);
    z = Math.floor(Math.random()*255);
    document.getElementById("color3").style.backgroundColor = "rgb("+x+","+y+","+z+")";

    x = Math.floor(Math.random()*255);
    y = Math.floor(Math.random()*255);
    z = Math.floor(Math.random()*255);
    document.getElementById("color4").style.backgroundColor = "rgb("+x+","+y+","+z+")";

    x = Math.floor(Math.random()*255);
    y = Math.floor(Math.random()*255);
    z = Math.floor(Math.random()*255);
    document.getElementById("color5").style.backgroundColor = "rgb("+x+","+y+","+z+")";
}