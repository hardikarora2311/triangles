const sides= document.querySelectorAll(".side-input");
const hypoBtn= document.querySelector(".hypo-btn");
const  output= document.querySelector(".output");


function sumOfSqrs(a,b){
    const sum= a*a +b*b;
    return sum;
}

function calculateHypo(){
    const sum= sumOfSqrs(Number(sides[0].value), Number(sides[1].value));
    const hypo= Math.sqrt(sum);
    output.innerText= "The length of hypotenuse is: " + hypo;

}

hypoBtn.addEventListener("click", calculateHypo);