function yesClicked() {
    document.getElementById("message").innerHTML =
        "YAYYYY 💖💖💖<br>You just made my heart the happiest place on Earth 😍<br>Happy Valentine’s Day, meri bhondi baby 💕";
}

function noClicked() {
    let noBtn = document.getElementById("noBtn");
    noBtn.style.position = "absolute";
    noBtn.style.left = Math.random() * 80 + "%";
    noBtn.style.top = Math.random() * 80 + "%";
}

// floating hearts
setInterval(() => {
    const heart = document.createElement("div");
    heart.innerHTML = "💖";
    heart.style.position = "absolute";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    heart.style.fontSize = "24px";
    document.body.appendChild(heart);

    let moveUp = setInterval(() => {
        heart.style.top = heart.offsetTop - 2 + "px";
        if (heart.offsetTop < -20) {
            clearInterval(moveUp);
            heart.remove();
        }
    }, 20);
}, 500);
