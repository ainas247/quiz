let btn = document.getElementById("btn");
let result = document.getElementById("result");

btn.addEventListener("click", getResult);

function getResult() {
  let yourName = document.getElementById("yourname").value;
  if (yourName == "") {
    alert('Enter Your Name');
    return
  }
  let que1 = document.getElementById("question1").value;
   if (que1 == "") {
     alert("Question 1");
     return;
   }
  let que2 = document.getElementById("question2").value;
   if (que2 == "") {
     alert("Question 2");
     return;
   }
  let que3 = document.getElementById("question3").value;
   if (que3 == "") {
     alert("Question 3");
     return;
   }
  let que4 = document.getElementById("question4").value;
   if (que4 == "") {
     alert("Question 4");
     return;
   }
  let que5 = document.getElementById("question5").value;
   if (que5 == "") {
     alert("Question 5");
     return;
   }

  let realQue1 = que1.trim().toLowerCase();
  let realQue2 = que2.trim().toLowerCase();
  let realQue3 = que3.trim().toLowerCase();
  let realQue4 = que4.trim().toLowerCase();
  let realQue5 = que5.trim().toLowerCase();


  //answer

  let score1 = 0;
  let score2 = 0;
  let score3 = 0;
  let score4 = 0;
  let score5 = 0;

  if (realQue1 == "ikeja") {
    score1++;
  }

  if (realQue2 == "china") {
    score2++;
  }

  if (realQue3 == "woman") {
    score3++;
  }

  if (realQue4 == "ibadan") {
    score4++;
  }

  if (realQue5 == "babajide") {
    score5++;
  }
  let totalScore = score1 + score2 + score3 + score4 + score5;
  let scoreInpercent = (totalScore / 5) * 100;
  if (totalScore < 3) {
    result.innerHTML = ` 😥 
    <span style ="color:white; background-color:black; padding-left:5px; padding-right:5px; font-size:20px;">${yourName} You scored ${totalScore}/5 |
   ${scoreInpercent}% out of 100%  You can do better</span>`;
  } else {
    result.innerHTML = `👏👏👏 
    <span style ="color:white; background-color:green; padding-left:5px; padding-right:5px; font-size:20px;">${yourName} Ooinn.. You are doing well.. You scored ${totalScore}/5 |
   ${scoreInpercent}% out of 100% </span>`;
  }
}
