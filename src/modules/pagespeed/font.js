
(function(){
function addFont(e) {
    setTimeout(() => {
        const e = document.createElement("link"); 
        e.rel = "stylesheet", e.href = "fonts/circular-std/style.css", document.querySelector("head").append(e), localStorage.setItem("font", "true")
    }, e)
} localStorage.getItem("font") ? addFont(0) : window.matchMedia("(max-width: 480px)").matches ? addFont(1e3) : addFont(0);
}())
