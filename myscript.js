function dateNow(){
    let d=new Date();
    document.querySelector(".hour").innerText =amPmChechk(d.getHours())+" :";
    document.querySelector(".minute").innerText = zeroCheck(d.getMinutes())+" :";
    document.querySelector(".second").innerText = zeroCheck(d.getSeconds());
    let day=d.getDay();
    day_list=["Sonday","monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    document.querySelector(".day").innerText = day_list[day];
}
function zeroCheck(data){
    if (data<10) data="0"+data;
    return data;
}
function amPmChechk(d){
    document.querySelector(".am-pm").innerText = (d >= 12) ? "PM" : "AM";
    d = d % 12;
    return zeroCheck(d);
}
setInterval(dateNow,1000);