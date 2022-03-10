const sides= document.querySelectorAll(".sides");
const areaBtn= document.querySelector(".area-btn");
const output= document.querySelector(".output");

function calculateArea(){
    const area = 0.5 * Number(sides[0].value) *Number(sides[1].value);
    output.innerText= "The area of triangle is :" + area;
}

areaBtn.addEventListener("click", calculateArea);