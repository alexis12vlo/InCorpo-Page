


window.onscroll = function() {scrollFunction()};

function scrollFunction() {


  if (document.documentElement.scrollTop > 30) {

    document.getElementById("a").style.color = "#CE6D06";
    document.getElementById("a2").style.color = "#3F3A64";
    document.getElementById("a3").style.color = "#3F3A64";
    document.getElementById("a4").style.color = "#3F3A64";
    document.getElementById("a5").style.color = "#3F3A64";
    document.getElementById("logo5").style.color = "#3F3A64";
    document.getElementById("plogo").style.color = "#3F3A64";
    document.getElementById("haderback").style.top = "0";
    document.getElementById("botonase").style.color = "#3F3A64";
    document.getElementById("luna").style.color = "#3F3A64";
    document.getElementById("botonase").style.borderColor = "#3F3A64";
      mouseOver();
    document.getElementById("haderback").style.backgroundColor = "white";

    
  } else {
    document.getElementById("a").style.color = "#FFFFFF";
    document.getElementById("a2").style.color = "#FFFFFF";
    document.getElementById("a3").style.color = "#FFFFFF";
    document.getElementById("a4").style.color = "#FFFFFF";
    document.getElementById("a5").style.color = "#FFFFFF";
     document.getElementById("botonase").style.color = "#FFFFFF";
    document.getElementById("luna").style.color = "#FFFFFF";
    document.getElementById("botonase").style.borderColor = "#FFFFFF";
    document.getElementById("botonase").style.Color = "#3F3A64";
    document.getElementById("logo2").style.color = "#FFFFFF";
    document.getElementById("logo5").style.color = "#FFFFFF";
    document.getElementById("plogo").style.color = "#FFFFFF";
  document.getElementById("haderback").style.backgroundColor = "transparent";  document.getElementById("navbar").style.top = "0px";
  
  }
  document.getElementById("botonase").addEventListener("mouseover", mouseOver);
  document.getElementById("botonase").addEventListener("mouseout", mouseOut);

function mouseOver() {

  document.getElementById("botonase").style.color = "#3F3A64";

}

function mouseOut() {
  document.getElementById("botonase").style.color = "#FFFFFF";
}
}
