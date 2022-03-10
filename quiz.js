const quizForm= document.querySelector(".quiz");
const ansBtn= document.querySelector(".submit-btn");
const quizRes= document.querySelector(".output");

const correctAns= ["90°", "right-angeled", "equilateral"];

function calculateScore(){
    let score=0;
    let index=0;
    const formResults= new FormData(quizForm);  //formdata is an API used to access form results from a submission.
    for(let entry of formResults.values()){
        if (entry=== correctAns[index]){
            score= score+1;
        }
        index=index+1;
    }
    quizRes.innerText= "Your score is: " + score;


}


ansBtn.addEventListener("click", calculateScore);
