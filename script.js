"use strict";
const quezQuestion = [
  {
    question: "What is a group of crows called?",
    a: "A murder",
    b: "A flock",
    c: "A gathering",
    d: "A congress",
    ans: "ans1",
  },
  {
    question: "Compared to their body weight, what animal is the strongest?",
    a: "Elephant",
    b: "Ant",
    c: "Dung Beetle",
    d: "Cow",
    ans: "ans3",
  },
  {
    question: "How many dots appear on a pair of dice?",
    a: "21",
    b: "36",
    c: "42",
    d: "12",
    ans: "ans4",
  },
  {
    question: "Which is the only body part that is fully grown from birth?",
    a: "Arms",
    b: "Legs",
    c: "Eyes",
    d: "Heart",
    ans: "ans3",
  },
  {
    question: "What is acrophobia a fear of?",
    a: "Water",
    b: "Heights",
    c: "Spiders",
    d: "Flying",
    ans: "ans2",
  },
  {
    question: "In what country was Elon Musk born?",
    a: "United States",
    b: "Canada",
    c: "South Africa",
    d: "Australia",
    ans: "ans3",
  },
  {
    question: "Who performs the voice of Homer Simpson?",
    a: "Seth MacFarlane",
    b: "Matt Groening",
    c: "Dan Castellaneta",
    d: "Hank Azaria",
    ans: "ans3",
  },
  {
    question: "What country has the most islands?",
    a: "Japan",
    b: "Philippines",
    c: "Indonesia",
    d: "Sweden",
    ans: "ans2",
  },
  {
    question: "In Australia what is commonly known as a Bottle-o?",
    a: "Supermarket",
    b: "Gas station",
    c: "Pharmacy",
    d: "Liquor store",
    ans: "ans4",
  },
  {
    question: "How many hearts does an octopus have?",
    a: "1",
    b: "2",
    c: "3",
    d: "4",
    ans: "ans3",
  },
  {
    question: "December 26th is known by what names in Ireland?",
    a: "Boxing Day",
    b: "Christmas Day",
    c: "Saint Stephen's Day",
    d: "New Year's Day",
    ans: "ans3",
  },
  {
    question: "In what US state is the country's busiest airport located?",
    a: "California",
    b: "Texas",
    c: "Florida",
    d: "Georgia",
    ans: "ans4",
  },
  {
    question: "What planet is closest to the sun?",
    a: "Venus",
    b: "Earth",
    c: "Mars",
    d: "Mercury",
    ans: "ans4",
  },
  {
    question: "Where is the strongest human muscle located?",
    a: "Arm",
    b: "Leg",
    c: "Back",
    d: "Jaw",
    ans: "ans4",
  },
  {
    question: "What phone company produced the 3310?",
    a: "Apple",
    b: "Samsung",
    c: "Nokia",
    d: "Motorola",
    ans: "ans3",
  },
  {
    question: "What is the chemical symbol for gold?",
    a: "Go",
    b: "Au",
    c: "Ag",
    d: "Ge",
    ans: "ans2",
  },
  {
    question: "Which gas do plants absorb from the atmosphere?",
    a: "Oxygen",
    b: "Carbon dioxide",
    c: "Nitrogen",
    d: "Hydrogen",
    ans: "ans2",
  },
  {
    question: "Who wrote the play 'Romeo and Juliet'?",
    a: "William Shakespeare",
    b: "Leo Tolstoy",
    c: "Jane Austen",
    d: "Charles Dickens",
    ans: "ans1",
  },
  {
    question: "What is the largest mammal in the world?",
    a: "Elephant",
    b: "Giraffe",
    c: "Blue whale",
    d: "Hippopotamus",
    ans: "ans3",
  },
  {
    question: "What is the capital of France?",
    a: "London",
    b: "Berlin",
    c: "Madrid",
    d: "Paris",
    ans: "ans4",
  },
  {
    question: "Which planet is known as the 'Red Planet'?",
    a: "Earth",
    b: "Venus",
    c: "Mars",
    d: "Jupiter",
    ans: "ans3",
  },
  {
    question: "What is the main ingredient in traditional Japanese miso soup?",
    a: "Tofu",
    b: "Seaweed",
    c: "Noodles",
    d: "Miso paste",
    ans: "ans4",
  },
  {
    question: "Who is known as the father of modern physics?",
    a: "Isaac Newton",
    b: "Albert Einstein",
    c: "Stephen Hawking",
    d: "Galileo Galilei",
    ans: "ans2",
  },
  {
    question: "Which gas is most abundant in Earth's atmosphere?",
    a: "Oxygen",
    b: "Carbon dioxide",
    c: "Nitrogen",
    d: "Hydrogen",
    ans: "ans3",
  },
  {
    question: "What is the tallest mountain in the world?",
    a: "Mount Kilimanjaro",
    b: "Mount Fuji",
    c: "Mount Everest",
    d: "Mount McKinley",
    ans: "ans3",
  },
];
const questions = document.querySelector(".question");
const option1 = document.querySelector(".option1");
const option2 = document.querySelector(".option2");
const option3 = document.querySelector(".option3");
const option4 = document.querySelector(".option4");

const ans = document.querySelectorAll(".option");

const submit = document.querySelector(".submit");

const totalScore = document.querySelector(".showResult");
// const playAgain = document.querySelector(".score1");

let quezCounter = 0;
let score = 0;
const loadQuestion = () => {
  questions.innerHTML = quezQuestion[quezCounter].question;
  option1.innerHTML = quezQuestion[quezCounter].a;
  option2.innerHTML = quezQuestion[quezCounter].b;
  option3.innerHTML = quezQuestion[quezCounter].c;
  option4.innerHTML = quezQuestion[quezCounter].d;
};

loadQuestion();

function disSelect() {
  ans.forEach((ele) => (ele.checked = false));
}
// ------------------------get the checked ans---------------
const getAns = function () {
  let answer;
  ans.forEach((curEle) => {
    if (curEle.checked) {
      answer = curEle.id;
    }
  });
  return answer;
};

// -----------------------------click on submit-----------------
submit.addEventListener("click", function () {
  const checkAnswer = getAns();

  if (checkAnswer === quezQuestion[quezCounter].ans) {
    score++;
  }
  quezCounter++;
  if (quezCounter < quezQuestion.length) {
    loadQuestion();
  } else {
    totalScore.innerHTML = `
    <h1 >Score : ${score} out of ${quezQuestion.length}</h1><br>
    <button  onClick="location.reload()">Play again</button>`;
  }
  disSelect();
});
