const quizData = [
    {
    question: "What is the capital of France?",
      options: ["Paris", "Berlin", "London", "Madrid"],
      correctAnswer: "Paris"
    }, 
  
    {
      question: "Who wrote 'Romeo and Juliet'?",
      options: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Mark Twain"],
      correctAnswer: "William Shakespeare"
    },
    {
        question: "What is the full form of JS?",
          options: ["java script", "java", "java js", "java string"],
          correctAnswer: "java script"
        },
        {
            question: "What is the capital of INDIA?",
              options: ["Delhi", "New Delhi", "Tamil Nadu", "Maharastra"],
              correctAnswer: "Delhi"
            },
    // Add more questions as needed
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionElement = document.getElementById('question');
  const optionsElement = document.getElementById('options');
  const feedbackElement = document.getElementById('feedback');
  const scoreElement = document.getElementById('score');
  const submitButton = document.getElementById('submit-btn');
  const nextButton = document.getElementById('next-btn');
  const resetButton = document.getElementById('reset-btn');
  const quizForm = document.getElementById('quiz-form');
  const scoreContainer = document.getElementById('score-container');
  
  function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionElement.innerText = currentQuizData.question;
    optionsElement.innerHTML = '';
    currentQuizData.options.forEach((option, index) => {
      const optionElement = document.createElement('div');
      optionElement.classList.add('option');
      optionElement.innerText = `${index + 1}. ${option}`;
      optionElement.addEventListener('click', () => selectOption(option));
      optionsElement.appendChild(optionElement);
    });
    submitButton.disabled = true;
  }
  
  function selectOption(option) {
    const currentQuizData = quizData[currentQuestion];
    const selectedOption = currentQuizData.options.indexOf(option);
    const correctOption = currentQuizData.options.indexOf(currentQuizData.correctAnswer);
    if (selectedOption === correctOption) {
      feedbackElement.innerText = "Correct!";
      score++;
    } else {
      feedbackElement.innerText = "Wrong!";
    }
    submitButton.disabled = false;
  }
  
  function submitAnswer(event) {
    event.preventDefault();
    nextButton.style.display = 'block';
    submitButton.disabled = true;
  }
  
  function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      loadQuestion();
      feedbackElement.innerText = "";
      nextButton.style.display = 'none';
    } else {
      showScore();
    }
  }
  
  function showScore() {
    quizForm.style.display = 'none';
    scoreContainer.style.display = 'block';
    scoreElement.innerText = `${score}/${quizData.length}`;
  }
  
  function resetQuiz() {
    currentQuestion = 0;
    score = 0;
    loadQuestion();
    quizForm.style.display = 'block';
    scoreContainer.style.display = 'none';
  }
  
  loadQuestion();
  
  submitButton.addEventListener('click', submitAnswer);
  nextButton.addEventListener('click', nextQuestion);
  resetButton.addEventListener('click', resetQuiz);
  