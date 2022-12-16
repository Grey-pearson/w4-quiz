const discription = $('#discription');
const quizContainer = $('#quiz-container');
const rightorWrong = $('#rightorWrong');
const scoreName = $('#scoreName');
const results = $('#results');
const questionText = $('#questionText')
const timer = $('#timer')
let correct = 0
const Questions = [
    {
        id: 0,
        question: '1 + (2^98*8/4)',
        options: ['3', 'wait what','*sobs*'],
        answer: '3'
    },

    {
        id: 1,
        question: '2+2',
        options: ['3.9', '4', '4.1'],
        answer: '4'
    },
    {
        id: 2,
        question: 'who invented programming ',
        options: ['Albert Einstein', 'Alan Turning', 'Ada Lovelece'],
        answer: 'Ada Lovelece'
    }
]

// reducint vars
$('#start').click(buildQuiz)

// working
function buildQuiz(){
    discription.css('display', 'none')
    quizContainer.css('display', 'block')
    startTimer(99)
    iterate()
}


function startTimer(time){
    counter = setInterval(clock, 1000);
    function clock(){
        timer.text(time)
        time--
        if(time < 0){ 
            clearInterval(counter)
        }
    }
}
// let questionNum = 0



function iterate(){
    let questionNum = 0
    let currentQuestion = Questions[questionNum]
    // nextQuestion()
    // questionText.text(Questions[i].question)
    console.log('ah')
    console.log('current question: ' + currentQuestion.question)
    questionText.text(currentQuestion.question)

    // Getting the options
    const btn1 = $('#btn-1');
    const btn2 = $('#btn-2');
    const btn3 = $('#btn-3');

    console.log(currentQuestion.options)

    // Providing option text 
    btn1.text(currentQuestion.options[0])
    btn2.text(currentQuestion.options[1])
    btn3.text(currentQuestion.options[2])

    var selected = ''
    
    // Show selection for op1
    btn1.click(function() {
        // console.log('btn1')
        selected = currentQuestion.options[0] === currentQuestion.answer ? true : false
        console.log(selected)
        anwser(selected)
    })

    // Show selection for op2
    btn2.click(function() {
        selected = currentQuestion.options[1] === currentQuestion.answer ? true : false
        console.log(selected)
        anwser(selected)
    })

        // Show selection for op3
    btn3.click(function() {
        selected = currentQuestion.options[2] === currentQuestion.answer ? true : false
        console.log(selected)
        anwser(selected)
    })


    function anwser(selected){
        if (selected === true) {
            questionNum = questionNum + 1
            console.log('correct: ' + correct)
            nextQuestion()
        } else {
            // timer
            console.log('time')
        }
    }

    function nextQuestion(){
        questionText.text(currentQuestion.question)
        // Providing option text 
        btn1.text(currentQuestion.options[0])
        btn2.text(currentQuestion.options[1])
        btn3.text(currentQuestion.options[2])
    }
}