var mouseEvent="empty";
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
radius= 30;
width= 5;

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e) {  
  color=document.getElementById("color_input").value;  
  width=document.getElementById("width_input").value;
 radius=document.getElementById("radius_input").value;
  mouseEvent="mouseDown";
}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e) {  
  
  mouseEvent="mouseUp";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e) {  
  mouseEvent="mouseleave";
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e) { 
  currentX= e.clientX - canvas.offsetLeft;
  currentY= e.clientY - canvas.offsetTop;
                          
  if(mouseEvent=="mouseDown"){
    console.log("The current position of X is " + currentX + " and Y is" + currentY)
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.arc(currentX , currentY , radius , 0 , 2*Math.PI );
    ctx.stroke();
  }
}

function cc(){
  ctx.clearRect(0,0, ctx.canvas.width, ctx.canvas.height);
}