window.onload = function() {
        var btn = document.getElementById("button-change");
        var btn2 = document.getElementById("magic");
    btn.addEventListener("click", function() {
        var texto = document.getElementById("paragraph");
        texto.innerHTML = "<h2>Git y Github te amamos</h2>";
    })
    btn2.addEventListener("click", function(){
        var txt = document.getElementById("txt");
    //txt.innerHTML = "";
        txt.classList.add("disappear");
})
}