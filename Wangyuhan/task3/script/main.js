setInterval(
    function () {
        showTime()
    },
1000);

function showTime () {
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    var index=parseInt(Math.random()*arr.length);
    var arr = new Array();
    /*
    *设置几个变化时可随机选择的颜色
    */
    arr.push("#EED2EE");
    arr.push("#E0EEEE");
    arr.push("#71C671");
    arr.push("#EECBAD");
    arr.push("#6CA6CD");
    arr.push("#E9967A");
    /*
    *设置显示格式
    */
    if(second<10){
        second="0"+second;
    }
    if(minute<10){
        minute="0"+minute;
    }
    if(hour<10){
        hour="0"+hour;
    }
    document.getElementById("time").innerHTML= hour+":"+minute+":"+second;
    document.body.style.backgroundColor = arr[index];
}
