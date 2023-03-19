const discription = $('#discription');
const quizContainer = $('#quiz-container');
const rightorWrong = $('#rightorWrong');
const scoreName = $('#scoreName');
const results = $('#results');
const questionText = $('#questionText')
const timer = $('#timer')
const scoreText = $('.score')
const scoreRecords = document.querySelector('#scoreRecords')
const btn1 = $('#0');
const btn2 = $('#1');
const btn3 = $('#2')
const quizButton = $('.quizButton')
let correct = 0
let questionNum = 0
const Questions = [
    {
        question: '1 + (2^98*8/4)',
        options: ['3', 'wait what', '*sobs*'],
        answer: 0
    },

    {
        question: '2+2',
        options: ['3.9', '4', '4.1'],
        answer: 1
    },
    {
        question: 'who invented programming ',
        options: ['Albert Einstein', 'Alan Turning', 'Ada Lovelece'],
        answer: 2
    }
]

let currentQuestion = Questions[questionNum]

$('#start').click(buildQuiz)


function buildQuiz() {
    discription.css('display', 'none')
    quizContainer.css('display', 'block')
    startTimer(99)
    nextQuestion()
    setQuestion(questionNum)
}


function startTimer(time) {
    counter = setInterval(clock, 1000);
    function clock() {
        timer.text(time)
        time--
        if (time < 0) {
            clearInterval(counter)
        }
    }
}

function nextQuestion() {
    questionText.text(currentQuestion.question)
}

document
    .querySelectorAll('.quizButton')
    .forEach(element => element.addEventListener('click', function () {
        let userAnswer
        switch (element.id) {
            case '0':
                userAnswer = 0 === Questions[questionNum].answer ? true : false
                anwser(userAnswer)
                break
            case '1':
                userAnswer = 1 === Questions[questionNum].answer ? true : false
                anwser(userAnswer)
                break
            case '2':
                userAnswer = 2 === Questions[questionNum].answer ? true : false
                anwser(userAnswer)
                break
        }
    }))

function anwser(selected) {
    if (selected === true) {
        correct++
        scoreText.text(correct)
    }
    questionNum++
    if (questionNum >= 3) {
        quizContainer.css('display', 'none')
        scoreName.css('display', 'block')
    } else {
        setQuestion()
    }

}

function setQuestion() {
    questionText.text(Questions[questionNum].question)
    btn1.text(Questions[questionNum].options[0])
    btn2.text(Questions[questionNum].options[1])
    btn3.text(Questions[questionNum].options[2])
}

if (questionNum >= 2) {
    quizContainer.css('display', 'none')
    scoreName.css('display', 'block')
}

document.querySelector('#initials').addEventListener('submit', function (event) {
    event.preventDefault()
    let initials = document.querySelector('#scoreInitials').value

    scoreName.css('display', 'none')
    results.css('display', 'block')
    let winners = window.localStorage.getItem('score')
    console.log(winners)
    scoreRecords.insertAdjacentHTML('afterbegin', winners)

    const recordElement = `<li>${initials}: ${correct}</li>`
    scoreRecords.insertAdjacentHTML('afterbegin', recordElement)

    localStorage.setItem('score', recordElement)

})

document.querySelector('#restart').addEventListener('click', function () {
    results.css('display', 'none')
    correct = 0
    questionNum = 0
    buildQuiz()
})