const bodyPart = document.getElementById("body");
// const alltext = document.getElementsByTagName("*");
// const light_btn = document.getElementById("cnbtn");
const sunicon = document.getElementById("daylighticon")
const night = document.getElementById("nighticon")
const main = document.getElementById("mainIdHeading1")
const main2 = 
document.getElementById("mainIdHeading2")
const main3 = 
document.getElementById("mainIdHeading3")
const aboutme = 
document.getElementById("about")
// console.log("mainIdHeading");


const lightDark=()=>{
  bodyPart.style.background = "black";
  sunicon.style.visibility = "hidden";
  sunicon.style.marginBottom = "-4rem";
  night.style.visibility = "visible";
  main.style.color = "white";
  main2.style.color = "white";
  main3.style.color = "white";
  aboutme.style.color = "white";
}
sunicon.addEventListener("click",lightDark);
const lightnotdark=()=>{
  bodyPart.style.background = "white";
  sunicon.style.visibility ="visible";
  night.style.visibility = "hidden";
  main.style.color = "black";
  main2.style.color = "black";
  main3.style.color = "black";
  aboutme.style.color = "black";
}

night.addEventListener("click",lightnotdark)






// const toggleColor=()=>{
//   for (var i = 0; i < colors.length; i ++ ){
//     navele[i].style.color = 'blue';
//   }
//   // this.style.color = 'orange';
// } 

// for(var i = 0; i < navele.length;i++){   navele[i].addEventListener("click",toggleColor)
// }









// for (var i = 0; i < colors.length; i ++ ){
//   colors[i].addEventListener('click', toggleColor);
// }

// function toggleColor(){
//   for (var i = 0; i < colors.length; i ++ ){
//     colors[i].style.color = 'blue';
//   }
//   this.style.color = 'orange';
// }
