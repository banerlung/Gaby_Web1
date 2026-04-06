const tools = document.getElementById("tools");
const group = document.getElementById("group");
let search = document.getElementById("input");
let resultSearch = document.getElementById("result");
let MenuButton = document.getElementById("menu");
let list = document.getElementById("list");
let img = document.getElementById("img");
let img2 = document.getElementById("img2");
let time = document.getElementById("time");
let sites = document.getElementsByClassName("sites2");
let sitesInput = document.getElementById("href");
let chTime = document.getElementById("clock");
img2.onclick = function() {
    search.value = "https://httpbin.org";
    let resultSearch1 = search.value;
    localStorage.setItem("resultSearch1",resultSearch1);
    window.open("browser.html");
}
img.onclick = function() {
  search.value = "https://www.wikipedia.org";
  let resultSearch1 = search.value;
  localStorage.setItem("resultSearch1",resultSearch1);
window.open("browser.html");
}
tools.onclick = function() {
    group.classList.toggle("скрыт");
};
resultSearch.onclick = function() {
    let resultSearch1 = search.value;
    localStorage.setItem("resultSearch1",resultSearch1);
    window.open("browser.html");
}
MenuButton.onclick = function() {
    list.classList.toggle('hidden');
}
let Theme = document.getElementById("Theme");
Theme.onclick = function() {
document.body.classList.toggle("темная")
if (document.body.classList.contains('темная')) {
        localStorage.setItem('savedTheme', 'dark');
    } else {
        localStorage.setItem('savedTheme', 'light');
    }
};
let currentTheme = localStorage.getItem('savedTheme');
if (currentTheme === 'dark') {
    document.body.classList.add('темная');
} else {
    document.body.classList.remove('темная');
}
function Time() {
    let now = new Date(); 
    let hours = now.getHours();
    let minutes = now.getMinutes(); 
    let seconds = now.getSeconds(); 
    if (hours < 10) hours = '0' + hours;
    if (minutes < 10) minutes = '0' + minutes;
    if (seconds < 10) seconds = '0' + seconds;
    let timeElement = document.getElementById('time'); 

    if (timeElement) {
        timeElement.textContent = `${hours}:${minutes}:${seconds}`;
    }
}
Time();
setInterval(Time, 1000);

sites.onclick = function() {
    sitesInput.classList.toggle("hidden");
}
function checkTime() {
if(chTime === true) {
    time.classList.remove("hidden2");
} else{
    time.classList.add("hidden2");
}
}
setInterval(checkTime, 1000)