//将对象转化为数组
function push(){
    var cityair=document.getElementById('source').children;
    var arr = [];
    for (var i = 0;i<cityair.length; i++ ){
         var text=cityair[i].innerText;
         var node=[text.substr(0, 2), text.substr(-2, 2)];
         arr.push(node);
        }
        return arr;
}
function sortdata(arr){
    arr.sort(function(a, b) {
        return a[1] - b[1];
    });
    return arr;
}
function display(arr){
    var resort=document.getElementById("resort");
    for(var i=0;i<arr.length;i++)
    {
        var Text="第"+(i+1)+"名："+arr[i][0]+"，"+"空气质量：";
        var oli=document.createElement("li");
        var ob=document.createElement("b");
        oli.innerText=Text;
        ob.innerText=arr[i][1];
        oli.appendChild(ob);
        resort.appendChild(oli);
    }
}
function onclick(){
    var btn = document.getElementById("sort-btn");
    btn.onclick = function(){
    var aqiarr=push();
    aqiarr=sortdata(aqiarr);
    display(aqiarr);
    }
}
onclick(); 