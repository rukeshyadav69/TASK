// Quiz Questions
const quizData = [
  {
    question: "Which language is used for styling web pages?",
    options: ["HTML", "CSS", "JavaScript", "Python"],
    answer: "CSS"
  },
  {
    question: "Which language is used for web development?",
    options: ["C++", "Java", "JavaScript", "Kotlin"],
    answer: "JavaScript"
  }
];

const quizContainer = document.getElementById("quiz-container");
const submitBtn = document.getElementById("submit-btn");
const result = document.getElementById("result");

// Display Quiz
quizData.forEach((q, index) => {
  let div = document.createElement("div");
  div.innerHTML = `
    <p><b>${index + 1}. ${q.question}</b></p>
    ${q.options.map(opt =>
      `<label><input type="radio" name="q${index}" value="${opt}"> ${opt}</label><br>`
    ).join("")}
  `;
  quizContainer.appendChild(div);
});

// Submit Quiz
submitBtn.addEventListener("click", () => {
  let score = 0;
  quizData.forEach((q, index) => {
    let selected = document.querySelector(`input[name="q${index}"]:checked`);
    if (selected && selected.value === q.answer) {
      score++;
    }
  });
  result.textContent = `You scored ${score} / ${quizData.length}`;
});

// Fetch Joke API
document.getElementById("joke-btn").addEventListener("click", () => {
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then(res => res.json())
    .then(data => {
      document.getElementById("joke").textContent = `${data.setup} - ${data.punchline}`;
    })
    .catch(err => console.error("Error fetching joke:", err));
});
