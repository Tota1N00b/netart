const staticCat = document.querySelector(".static.cat-contaimer");
const catFace = document.querySelector(".cat-face");

staticCat.classList.add("calico");

staticCat.addEventListener("click", function(){
    let textBubble = staticCat.querySelector(".cat-speech-bubble");
    textBubble.innerHTML = "dont touch me";
});

catFace.innerText = "O W O";
catHead. style. backgroundColor = "gray";