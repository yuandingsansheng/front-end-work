setInterval("fun()",1000);
function fun()
{				
    var date=new Date();				
    document.getElementById("time").innerHTML=date.toLocaleString();			
}
window.onload = function()
{
    changeColor();
        
}
function changeColor()
{
    var r = parseInt(Math.random() * 255);
    var g = parseInt(Math.random() * 255);
    var b = parseInt(Math.random() * 255);
    var colorHex = r.toString(16) + g.toString(16) + b.toString(16);
    document.body.bgColor = "#"+colorHex;
    window.setTimeout("changeColor()",1000);
}