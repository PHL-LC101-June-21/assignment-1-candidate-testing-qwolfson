const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride"
let candidateAnswer = "";
let questions = ["Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters? ", "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"]
let candidateAnswers = []


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("Please enter your name: ")
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  //candidateAnswer = input.question(question)



for (i=0; i<questions.length; i++){
  candidateAnswers[i] = input.question(questions[i])
  console.log("")
}
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

let grade = 0

for (i=0; i<questions.length; i++){
  if (candidateAnswers[i].toUpperCase === questions[i].toUpperCase){
    grade++
  }
  console.log(`Your Answer: ${correctAnswers[i]}\nCorrect Answer: ${candidateAnswers[i]}\n`)
  
}

let gradePercent = (grade/5)*100

if(gradePercent>80){
  console.log(`You got ${gradePercent}% of the questions right. You passed!`)
} else{
  console.log(`You got only got ${gradePercent}% of the questions right.  You failed.`)
}

  //let grade = 0;
  //console.log("")
  //console.log("Candidate Name:", candidateName);
  //console.log("1)", question);
  //console.log("Your Answer:", candidateAnswer);
  //console.log("Correct Answer:", correctAnswer);
  //console.log("");
  //if (candidateAnswer.toUpperCase() === correctAnswer.toUpperCase()) {
   //grade += 1
    //console.log("Nice work!");
    //console.log("You got", grade, "out of 1 question right.");
  //} else {
    //console.log("Not quite! You got", grade, "out of 1 question right. Better luck next time.");
 // }
  

  //return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log("Hi there ", candidateName, ", are you ready to take a quiz?")
  console.log("")
  
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};