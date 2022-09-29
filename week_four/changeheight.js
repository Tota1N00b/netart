// const largecards = document.querySelectorAll(".large-card");
// const largecardsinnerfront = document.querySelectorAll(".large-card-front");


function reseizecards() {
    const largecards = document.getElementsByClassName("large-card");
    const largecardsinnerfront = document.getElementsByClassName("large-card-front");
    const largecardsinnerback = document.getElementsByClassName("large-card-back");

    console.log("start" + largecards.length);

    for (let i = 0; i < largecards.length; i++) {
        largecards[i].style.height = largecardsinnerfront[i].clientHeight + "px";
        largecards[i].style.width = largecardsinnerfront[i].clientWidth + "px";
        largecardsinnerback[i].style.height = largecardsinnerfront[i].clientHeight + "px";
    }
}
reseizecards();

window.addEventListener('resize', function (event) {
    reseizecards();
});