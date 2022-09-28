// const largecards = document.querySelectorAll(".large-card");
// const largecardsinnerfront = document.querySelectorAll(".large-card-front");

const largecards = document.getElementsByClassName(".large-card");
const largecardsinnerfront = document.getElementsByClassName(".large-card-front");

console.log("start");

for(let i=0; i<largecards.length;i++){
    console.log(largecards[i].style.height);
    largecards[i].style.height = largecardsinnerfront[i].style.height;
    // largecards[i].style.height = "100px";
    console.log("changed"+i);
    console.log(largecardsinnerfront[i].style.height);
}