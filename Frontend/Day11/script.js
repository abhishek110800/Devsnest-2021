const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: '1. Who is the Home Minister Of India?',
    answers: [
      { text: 'Narend Modi', correct: false },
      { text: 'Amit Shah', correct: true },
      { text: 'Arun Jaitley', correct: false },
      { text: 'Rahul Gandi', correct: false },
    ]
  },
  {
    question: '2. Who is the owner of Microsoft?',
    answers: [
      { text: 'Mark Penn', correct: false },
      { text: 'Satya Nadella', correct: false },
      { text: 'Bill Gates', correct: true },
      { text: 'Paul Allen', correct: false }
    ]
  },
  {
    question: '3. Which one of the following is All India Service?',
    answers: [
      { text: 'IAS', correct: true },
      { text: 'IRS', correct: false },
      { text: 'PCS', correct: false },
      { text: 'IRTS', correct: false }
    ]
  },
  {
    question: '4. Which of the Article provide right to equality?',
    answers: [
      { text: '16', correct: false },
      { text: '21', correct: false },
      { text: '14', correct: true },
      { text: '15', correct: false },
    ]
  },
  {
    question: '5. What is the Capital of India?',
    answers: [
      { text: 'Mumbai', correct: false },
      { text: 'New Delhi', correct: true },
      { text: 'Bengaluru', correct: false },
      { text: 'Kolkata', correct: false }
    ]
  },
]
