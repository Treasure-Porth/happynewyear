const Name = document.getElementById("name")
const Pass = document.getElementById("password")
const sub = document.getElementById("submit")


document.addEventListener("DOMContentLoaded", initFunction);
sub.addEventListener("click", function(){
    var navalue = Name.value
    console.log(navalue)
})
