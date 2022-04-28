const StartKey = document.getElementById('start_button')
const NextKey = document.getElementById('next_button')
const question_box = document.getElementById('question_container')
const question_text = document.getElementById('question')
const AnswerKey = document.getElementById('answer_button')
const facts_btn = document.getElementById('facts')
const correct_pick =document.getElementsByClassName('btn correct')

let question_index
let question_mixer 

function startGame() {
  StartKey.classList.add('hide')
  question_mixer = questions.sort(() => Math.random() - .5) /*stackoverflow credit*/
  question_index = 0
  question_box.classList.remove('hide')
  next_quiz_question() 

}

StartKey.addEventListener('click', startGame)
NextKey.addEventListener('click', () => {
question_index++

next_quiz_question()
})

/* QUESTION DISPLAY */
function showQuestion(question) {
    question_text.innerText = question.question
    question.answers.forEach(answer => {
      const button = document.createElement('button')
      button.innerText = answer.text
      button.classList.add('btn')
      if (answer.correct){
        button.dataset.correct = answer.correct
        
      }
      button.addEventListener('click', selectAnswer)
      
      
      AnswerKey.appendChild(button)
    })
  }



  function selectAnswer(e, score_counter, correct_amswer) {
    const selectedButton = e.target
    const user_choice = e.target.innerText 
    
  
    const correct = selectedButton.dataset.correct
    answer_colour_set(document.body, correct)
    Array.from(AnswerKey.children).forEach(button => {
      answer_colour_set(button, button.dataset.correct)
    })
    if (question_mixer.length > question_index + 1) {
      NextKey.classList.remove('hide')
      
    } else {
      StartKey.innerText = 'Restart'
      StartKey.classList.remove('hide')
      facts_btn.classList.add('fact_button')
      facts_btn.classList.remove('hide')   
    }
  }

function next_quiz_question() {
  buttonChange()
  showQuestion(question_mixer[question_index])
}

function buttonChange() {
  clearAnaswers(document.body)
  NextKey.classList.add('hide')
  while (AnswerKey.firstChild) {
    AnswerKey.removeChild(AnswerKey.firstChild)
  }
}
function answer_colour_set(element, correct) {
  clearAnaswers(element)
  if (correct) {
    element.classList.add('correct')
    console.log(element)
  } else {
    element.classList.add('wrong')

  }
}

/* CLEAR ALL ANSWERS */
function clearAnaswers(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
  }



/* QUIZ QUESTIONS */
const questions = [
  {
    question: "How much percentage of the world\’s fresh water does Glaciers and ice sheets hold?",
    answers: [
      { text: "45%", correct: false },
      { text: "87%", correct: false },
      { text: "69%", correct: true },
      { text: "28%", correct: false }
    ]
  },
  {
    question: "Which is the oldest profession in the world",
    answers: [
      { text: "Teacher", correct: false },
      { text: "Dentist", correct: true },
      { text: "Doctor", correct: false },
      { text: "Prostitution", correct: false }
    ]
  },
  {
    question: "Guess the number of time a person has been strike by lightning and live?",
    answers: [
      { text: "4", correct: false },
      { text: "2", correct: false },
      { text: "9", correct: false },
      { text: "7", correct: true},
      
    ]
  },
  {
    question: "Where is the world's largest pyramid located?",
    answers: [
      { text: "Egypt", correct: false },
      { text: "Mexico", correct: true },
      { text: "Cambodia", correct: false },
      { text: "Iraq", correct: false },
    
    ]
  },
  {
    question: "Which country has the most islands in the world?",
    answers: [
      { text: "Greece", correct: false },
      { text: "Philippines", correct: true },
      { text: "Indonesia", correct: false },
      { text: "Sweeden", correct: false }
    ]
  },
  {
    question: "Which is the hottest chili pepper in the world",
    answers: [
      { text: "Pepper X", correct: true },
      { text: "Dragon's Breath", correct: false },
      { text: "Carolina Reaper", correct: false },
      { text: "Trinidad Moruga Scorpion", correct: false }
    ]
  },
  {
    question: "Where is the longest place name on the planet located?",
    answers: [
      { text: "Wales", correct: false },
      { text: "South Africa", correct: false },
      { text: "Massachusetts", correct: false },
      { text: "New Zealand", correct: true },
    ]
  }
]

