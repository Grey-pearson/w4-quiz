// use loop
// make array just straight array no nesting
// figure out how to cute and edit loop
// how to layer a loop in with code



// just button and for display manipulation
const discription = document.getElementById('discription');
// to grab buttons and display manipulation
const quizContainer = document.getElementById('quiz-container');
// to display if anwser was right or wrong
const rightorWrong = document.getElementById('rightorWrong');
// display manip and getting user initials for record keeping
const scoreName = document.getElementById('scoreName');
// to create li's and display manipulation
const results = document.getElementById('results');
// reference for Q's and correct anwsers
const Questions = [
    {
        id: 0,
        question: '1 + (2^98*8/4)',
        answers: [
            {text: '3', isCorrect: true},
            {text: 'wait what', isCorrect: false},
            {text: '*sobs*', isCorrect: false}
        ]
    },

    {
        id: 1,
        question: '2+2',
        answers: [
            {text: '3.9', isCorrect: false},
            {text: '4', isCorrect: true},
            {text: '4.1', isCorrect: false}
        ]
    },
    {
        id: 2,
        question: 'who invented programming ',
        answers: [
            {text: 'Albert Einstein', isCorrect: false},
            {text: 'Alan Turning', isCorrect: false},
            {text: 'Ada Lovelece', isCorrect: true}
        ]
    }
]

let questionText = $('#question')

//button press call build quize
$('#start').on('click', buildQuiz)


function buildQuiz(){
    discription.style.display = 'none'
    quizContainer.style.display = 'block'
    startTimer(time)
    iterate()
    // console.log()
    // console.log(time)

}

// let id = 0
let time = 100
let correct = 0

function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        $('#timer').text(time) //changing the value of timeCount with time value
        time--; //decrement the time value
        if(time < 0){ //if timer is less than 0
            clearInterval(counter); //clear counter
            // end quiz
        }
    }
}


function iterate(){
    // question.text('Questions[i].question')
    console.log('ah')
    let qlength = 3
    Questions.forEach( function(currentQuestion, questionNum) { /* … */ 
        console.log(currentQuestion)

        questionText.text(currentQuestion.question)

        // Getting the options
        const btn1 = $('#btn-1');
        const btn2 = $('#btn-2');
        const btn3 = $('#btn-3');

        // Providing option text 
        btn1.text(currentQuestion.answers[0].text)
        btn2.text(currentQuestion.answers[1].text)
        btn3.text(currentQuestion.answers[2].text)

        var selected = ''
    
        // Show selection for op1
        btn1.on("click", function() {
            // btn1.style.backgroundColor = "lightgoldenrodyellow";
            // btn2.style.backgroundColor = "lightskyblue";
            // btn3.style.backgroundColor = "lightskyblue";
            selected = currentQuestion.answers[0].isCorrect
            console.log(currentQuestion.answers[0].isCorrect)
            anwser(selected)
        })

        // Show selection for op2
        btn2.on("click", function() {
            // btn1.style.backgroundColor = "lightskyblue";
            // btn2.style.backgroundColor = "lightgoldenrodyellow";
            // btn3.style.backgroundColor = "lightskyblue";
            selected = currentQuestion.answers[1].isCorrect
            console.log(currentQuestion.answers[1].isCorrect)
            anwser(selected)
        })

        // Show selection for op3
        btn3.on("click", function() {
            // btn1.style.backgroundColor = "lightskyblue";
            // btn2.style.backgroundColor = "lightskyblue";
            // btn3.style.backgroundColor = "lightgoldenrodyellow";
            selected = currentQuestion.answers[2].isCorrect
            console.log(currentQuestion.answers[2].isCorrect)
            anwser(selected)
        })


        function anwser(selected){
            if (selected === true) {
                correct++
                console.log(correct)
            } else {
                time = time - 10
                // console.log(time)
            }
        }

    })
    // for (let i = 0; i < qlength;) {
    //     console.log(i)
         // make queastion = questions.question
        //  question.text(Questions[i].question)

        //  // Getting the options
        //  const btn1 = $('#btn-1');
        //  const btn2 = $('#btn-2');
        //  const btn3 = $('#btn-3');

        //  // Providing option text 
        //  btn1.text(Questions[i].answers[0].text)
        //  btn2.text(Questions[i].answers[1].text)
        //  btn3.text(Questions[i].answers[2].text)

        //  var selected = ''
        
        //  // Show selection for op1
        //  btn1.on("click", function() {
        //      // btn1.style.backgroundColor = "lightgoldenrodyellow";
        //      // btn2.style.backgroundColor = "lightskyblue";
        //      // btn3.style.backgroundColor = "lightskyblue";
        //      selected = Questions[i].answers[0].isCorrect
        //      console.log(Questions[i].answers[0].isCorrect)
        //      anwser(selected)
        //  })
    
        //  // Show selection for op2
        //  btn2.on("click", function() {
        //      // btn1.style.backgroundColor = "lightskyblue";
        //      // btn2.style.backgroundColor = "lightgoldenrodyellow";
        //      // btn3.style.backgroundColor = "lightskyblue";
        //      selected = Questions[i].answers[1].isCorrect
        //      console.log(Questions[i].answers[1].isCorrect)
        //      anwser(selected)
        //  })
    
        //  // Show selection for op3
        //  btn3.on("click", function() {
        //      // btn1.style.backgroundColor = "lightskyblue";
        //      // btn2.style.backgroundColor = "lightskyblue";
        //      // btn3.style.backgroundColor = "lightgoldenrodyellow";
        //      selected = Questions[i].answers[2].isCorrect
        //      console.log(Questions[i].answers[2].isCorrect)
        //      anwser(selected)
        //  })
    
    
        //  function anwser(selected){
        //      if (selected === true) {
        //          correct++
        //          console.log(correct)
        //      } else {
        //          time = time - 10
        //          // console.log(time)
        //      }
        //  }

    // };
}




var questions = [{
    question: "1. How do you write 'Hello World' in an alert box?",
    choices: ["msg('Hello World')", "msgBox('Hello World');", "alertBox('Hello World');", "alert('Hello World');"],
    correctAnswer: 3
}, {
    question: "2. How to empty an array in JavaScript?",
    choices: ["arrayList[]", "arrayList(0)", "arrayList.length=0", "arrayList.len(0)"],
    correctAnswer: 2
}, {
    question: "3. What function to add an element at the begining of an array and one at the end?",
    choices: ["push,unshift", "unshift,push", "first,push", "unshift,last"],
    correctAnswer: 1
}, {
    question: "4. What will this output? var a = [1, 2, 3]; console.log(a[6]);",
    choices: ["undefined", "0", "prints nothing", "Syntax error"],
    correctAnswer: 0
}, {
    question: "5. What would following code return? console.log(typeof typeof 1);",
    choices: ["string", "number", "Syntax error", "undefined"],
    correctAnswer: 0
},{
	question: "6. Which software company developed JavaScript?",
    choices: ["Mozilla", "Netscape", "Sun Microsystems", "Oracle"],
    correctAnswer: 1
},{
	question: "7. What would be the result of 3+2+'7'?",
    choices: ["327", "12", "14", "57"],
    correctAnswer: 3
},{
	question: "8. Look at the following selector: $('div'). What does it select?",
    choices: ["The first div element", "The last div element", "All div elements", "Current div element"],
    correctAnswer: 2
},{
	question: "9. How can a value be appended to an array?",
    choices: ["arr(length).value;", "arr[arr.length]=value;", "arr[]=add(value);", "None of these"],
    correctAnswer: 1
},{
	question: "10. What will the code below output to the console? console.log(1 +  +'2' + '2');",
    choices: ["'32'", "'122'", "'13'", "'14'"],
    correctAnswer: 0
}];


var currentQuestion = 0;
var viewingAns = 0;
var correctAnswers = 0;
var quizOver = false;
var iSelectedAnswer = [];
	var c=180;
	var t;
$(document).ready(function () 
{
    // Display the first question
    displayCurrentQuestion();
    $(this).find(".quizMessage").hide();
    $(this).find(".preButton").attr('disabled', 'disabled');
	
	timedCount();
	
	$(this).find(".preButton").on("click", function () 
	{		
		
        if (!quizOver) 
		{
			if(currentQuestion == 0) { return false; }
	
			if(currentQuestion == 1) {
			  $(".preButton").attr('disabled', 'disabled');
			}
			
				currentQuestion--; // Since we have already displayed the first question on DOM ready
				if (currentQuestion < questions.length) 
				{
					displayCurrentQuestion();
					
				} 					
		} else {
			if(viewingAns == 3) { return false; }
			currentQuestion = 0; viewingAns = 3;
			viewResults();		
		}
    });

	
	// On clicking next, display the next question
    $(this).find(".nextButton").on("click", function () 
	{
        if (!quizOver) 
		{
			
            var val = $("input[type='radio']:checked").val();

            if (val == undefined) 
			{
                $(document).find(".quizMessage").text("Please select an answer");
                $(document).find(".quizMessage").show();
            } 
			else 
			{
                // TODO: Remove any message -> not sure if this is efficient to call this each time....
                $(document).find(".quizMessage").hide();
				if (val == questions[currentQuestion].correctAnswer) 
				{
					correctAnswers++;
				}
				iSelectedAnswer[currentQuestion] = val;
				
				currentQuestion++; // Since we have already displayed the first question on DOM ready
				if(currentQuestion >= 1) {
					  $('.preButton').prop("disabled", false);
				}
				if (currentQuestion < questions.length) 
				{
					displayCurrentQuestion();
					
				} 
				else 
				{
					displayScore();
					$('#iTimeShow').html('Quiz Time Completed!');
					$('#timer').html("You scored: " + correctAnswers + " out of: " + questions.length);
					c=185;
					$(document).find(".preButton").text("View Answer");
					$(document).find(".nextButton").text("Play Again?");
					quizOver = true;
					return false;
					
				}
			}
					
		}	
		else 
		{ // quiz is over and clicked the next button (which now displays 'Play Again?'
			quizOver = false; $('#iTimeShow').html('Time Remaining:'); iSelectedAnswer = [];
			$(document).find(".nextButton").text("Next Question");
			$(document).find(".preButton").text("Previous Question");
			 $(".preButton").attr('disabled', 'disabled');
			resetQuiz();
			viewingAns = 1;
			displayCurrentQuestion();
			hideScore();
		}
    });
});



function timedCount()
	{
		if(c == 185) 
		{ 
			return false; 
		}
		
		var hours = parseInt( c / 3600 ) % 24;
		var minutes = parseInt( c / 60 ) % 60;
		var seconds = c % 60;
		var result = (hours < 10 ? "0" + hours : hours) + ":" + (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds  < 10 ? "0" + seconds : seconds);            
		$('#timer').html(result);
		
		if(c == 0 )
		{
					displayScore();
					$('#iTimeShow').html('Quiz Time Completed!');
					$('#timer').html("You scored: " + correctAnswers + " out of: " + questions.length);
					c=185;
					$(document).find(".preButton").text("View Answer");
					$(document).find(".nextButton").text("Play Again?");
					quizOver = true;
					return false;
					
		}
		
		/*if(c == 0 )
		{	
			if (!quizOver) 
			{
				var val = $("input[type='radio']:checked").val();
            	if (val == questions[currentQuestion].correctAnswer) 
				{
					correctAnswers++;
				}
				currentQuestion++; // Since we have already displayed the first question on DOM ready
				
				if (currentQuestion < questions.length) 
				{
					displayCurrentQuestion();
					c=15;
				} 
				else 
				{
					displayScore();
					$('#timer').html('');
					c=16;
					$(document).find(".nextButton").text("Play Again?");
					quizOver = true;
					return false;
				}
			}
			else 
			{ // quiz is over and clicked the next button (which now displays 'Play Again?'
				quizOver = false;
				$(document).find(".nextButton").text("Next Question");
				resetQuiz();
				displayCurrentQuestion();
				hideScore();
			}		
		}	*/
		c = c - 1;
		t = setTimeout(function()
		{
			timedCount()
		},1000);
	}
	
	
// This displays the current question AND the choices
function displayCurrentQuestion() 
{

	if(c == 185) { c = 180; timedCount(); }
    //console.log("In display current Question");
    var question = questions[currentQuestion].question;
    var questionClass = $(document).find(".quizContainer > .question");
    var choiceList = $(document).find(".quizContainer > .choiceList");
    var numChoices = questions[currentQuestion].choices.length;
    // Set the questionClass text to the current question
    $(questionClass).text(question);
    // Remove all current <li> elements (if any)
    $(choiceList).find("li").remove();
    var choice;
	
	
    for (i = 0; i < numChoices; i++) 
	{
        choice = questions[currentQuestion].choices[i];
		
		if(iSelectedAnswer[currentQuestion] == i) {
			$('<li><input type="radio" class="radio-inline" checked="checked"  value=' + i + ' name="dynradio" />' +  ' ' + choice  + '</li>').appendTo(choiceList);
		} else {
			$('<li><input type="radio" class="radio-inline" value=' + i + ' name="dynradio" />' +  ' ' + choice  + '</li>').appendTo(choiceList);
		}
    }
}

function resetQuiz()
{
    currentQuestion = 0;
    correctAnswers = 0;
    hideScore();
}

function displayScore()
{
    $(document).find(".quizContainer > .result").text("You scored: " + correctAnswers + " out of: " + questions.length);
    $(document).find(".quizContainer > .result").show();
}

function hideScore() 
{
    $(document).find(".result").hide();
}

// This displays the current question AND the choices
function viewResults() 
{

	if(currentQuestion == 10) { currentQuestion = 0;return false; }
	if(viewingAns == 1) { return false; }

	hideScore();
    var question = questions[currentQuestion].question;
    var questionClass = $(document).find(".quizContainer > .question");
    var choiceList = $(document).find(".quizContainer > .choiceList");
    var numChoices = questions[currentQuestion].choices.length;
    // Set the questionClass text to the current question
    $(questionClass).text(question);
    // Remove all current <li> elements (if any)
    $(choiceList).find("li").remove();
    var choice;
	
	
	for (i = 0; i < numChoices; i++) 
	{
        choice = questions[currentQuestion].choices[i];
		
		if(iSelectedAnswer[currentQuestion] == i) {
			if(questions[currentQuestion].correctAnswer == i) {
				$('<li style="border:2px solid green;margin-top:10px;"><input type="radio" class="radio-inline" checked="checked"  value=' + i + ' name="dynradio" />' +  ' ' + choice  + '</li>').appendTo(choiceList);
			} else {
				$('<li style="border:2px solid red;margin-top:10px;"><input type="radio" class="radio-inline" checked="checked"  value=' + i + ' name="dynradio" />' +  ' ' + choice  + '</li>').appendTo(choiceList);
			}
		} else {
			if(questions[currentQuestion].correctAnswer == i) {
				$('<li style="border:2px solid green;margin-top:10px;"><input type="radio" class="radio-inline" value=' + i + ' name="dynradio" />' +  ' ' + choice  + '</li>').appendTo(choiceList);
			} else {
				$('<li><input type="radio" class="radio-inline" value=' + i + ' name="dynradio" />' +  ' ' + choice  + '</li>').appendTo(choiceList);
			}
		}
    }
	
	currentQuestion++;
	
	setTimeout(function()
		{
			viewResults();
		},3000);
}
