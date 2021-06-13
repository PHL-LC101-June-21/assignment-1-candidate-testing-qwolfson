const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride"
let candidateAnswer = "";
let questions;
let correctAnswers;
let candidateAnswers;


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("Please enter your name: ")
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  candidateAnswer = input.question(question)


}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 


  let grade = 0;
  console.log("")
  console.log("Candidate Name:", candidateName);
  console.log("1)", question);
  console.log("Your Answer:", candidateAnswer);
  console.log("Correct Answer:", correctAnswer);
  console.log("");
  if (candidateAnswer === correctAnswer) {
    grade += 1
    console.log("Nice work!");
    console.log("You got", grade, "out of 1 question right.");
  } else {
    console.log("Not quite! You got", grade, "out of 1 question right. Better luck next time.");
  }
  

  return grade;
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