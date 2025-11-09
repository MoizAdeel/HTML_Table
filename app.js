let button = document.getElementById("btn");
let color = ["yellow", "red", "purple", "blue", "green", "orange", "brown", "gray", "pink"];
let run = 0;

button.addEventListener("click", function(){
    this.innerHTML = color[run];
    document.body.style.backgroundColor = color[run];
    run++;
    if (run >= color.length) {
        run = 0;
    }
})