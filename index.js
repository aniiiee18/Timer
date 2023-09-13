let hours = document.querySelector('#hrs');
let minutes = document.querySelector('#min');
let second = document.querySelector('#sec');

setInterval(function(){

    let currenttime = new Date();

    hours.innerHTML = (currenttime.getHours()<10?"0":" ") + currenttime.getHours();
    minutes.innerHTML = (currenttime.getMinutes()<10?"0":"") + currenttime.getMinutes();
    second.innerHTML = (currenttime.getSeconds()<10?"0":"") + currenttime.getSeconds();

}, 1000)

