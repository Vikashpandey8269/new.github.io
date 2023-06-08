function colorChange(){
    var color =document.getElementById("selectColor");
    var bgColor = color.options[color.selectedIndex].value;
    document.body.style.backgroundColor = bgColor;
}