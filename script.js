var istatus = document.querySelector("h5")

var add = document.querySelector("#add")
var remove = document.querySelector("#remove")
 add.addEventListener("click", function(){
    istatus.innerHTML = "Friends"
    istatus.style.color = "green"
 })
 remove.addEventListener("click", function(){
    istatus.innerHTML = "Stranger"
    istatus.style.color = "red"
 })