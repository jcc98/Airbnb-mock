const btn = document.getElementById("btn");
const vid = document.getElementById("vidId");
let state = "playing";

btn.addEventListener("click", () => {
    if (state === "paused") {
        vid.play();
        btn.innerText = "再生";
        state = "playing";
    } else {
        vid.pause();
        btn.innerText = "停止";
        state = "paused";
    }
});