var inputs= document.querySelectorAll(".angles");
var checkHeading= document.querySelector(".heading");
var checkBtn= document.querySelector("#check-button");
var output= document.querySelector(".output");


function sumOfAngles(a,b,c){
    const sum= a+b+c;
    console.log(sum);
    return sum;

}
function isTraingle(){
    const sum= sumOfAngles(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value))
    if (sum===180){
        output.innerText= "Yay, the angles form a triangle";
    }else {
        output.innerText="The angles don't form a traingle.";
    }
}

checkBtn.addEventListener("click", isTraingle)