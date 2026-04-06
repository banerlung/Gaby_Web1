let site = localStorage.getItem("resultSearch1");
let back = document.getElementById("back");
document.getElementById('window').src = site;
let search = document.getElementById("search");
let inputSearch = document.getElementById("urlAdress");
search.onclick = function() {
let url = inputSearch.value;
document.getElementById('window').src = url;
}
back.onclick = function() {
history.back();
inputSearch.value = null;
}
let reaload = document.getElementById("reload");
reload.onclick = function reload() {
location.reload();
}
let forward = document.getElementById("forward");
forward.onclick = function() {
    history.forward();
}
let Home = document.getElementById("Home");
Home.onclick = function() {
    open("index.html")
}
let theme = document.getElementById("Theme");
theme.onclick = function() {
    let header =  document.getElementById("header");
   header.classList.toggle("dark");
}