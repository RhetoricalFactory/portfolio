//Defines variable for index of question being asked from store.js
let questionNumber = 0
// Defines variable for tracking correct responses
let score = 0
// Defines variable for tracking incorrect responses
let scoreWrong = 0
//Displays the results and progress of the quiz
let progressBarTemplate = $(`<h2> Score ${score} correct ${scoreWrong} incorrect Question ${questionNumber +1} of 7</h2>`)
//Takes user from home page to the first question of the quiz
function startQuiz() {
    $('#startButton').click(function (event) {
        console.log("Keep Going");
        renderQuestion();
    });
}
//shows the content of the object in store.js as a question in the quiz
function renderQuestion() {
    console.log("hello");
    let questions = STORE.questions[questionNumber];
    const questionTemplate =
        $(`<h2 class="headStyle title"> Score ${score} correct ${scoreWrong} incorrect Question ${questionNumber +1} of 7</h2>
    
    <div id=questionSpot <section class="headStyle questionArea">
   ${questions.image}
          <h3 >${questions.questionText}</h3>
          <form method="post">
              <label><input type="radio" name="choice" value="${questions.responses[0]}">${questions.responses[0]}<br></label>
              <label><input type="radio" name="choice" value="${questions.responses[1]}">${questions.responses[1]}<br></label>
              <label><input type="radio" name="choice" value="${questions.responses[2]}">${questions.responses[2]}<br></label>
              <label><input type="radio" name="choice" value="${questions.responses[3]}">${questions.responses[3]}<br></label>
              <button type="submit" id="choose" value="submit">Submit</button>
            </form>
      </section>
      </div>`);
    $("main").html(questionTemplate);
}
//evaluates and communicates whether the user chose the correct answer.
function checkAnswer() {
    $("main").on("click", "#choose", function (event) {
        let questions = STORE.questions[questionNumber];
        event.preventDefault();
        console.log("clicked");
        let chosenAnswer = $("input[name=choice]:checked").val();
        console.log(chosenAnswer);
        if (!chosenAnswer) {
            alert("Select One");
            return;
        }
        if (chosenAnswer === questions.answer) {
            const correctResponse =
                $(`<h2 class="headStyle title"> Score ${score} correct ${scoreWrong} incorrect Question ${questionNumber +1} of 7</h2>
    <img ${questions.image}/>
    <section class="headStyle questionArea result">
    <h3 class="result">${questions.answer}</h3>
    <h4 class="result">Correct!</h4>
    <button type="submit" id="next" value="submit">Next</button>
    </section`);
            $("main").html(correctResponse);
            score = score + 1;
        } else {
            const inCorrectResponse =
                $(`<h2 class="headStyle title"> Score ${score} correct ${scoreWrong} incorrect Question ${questionNumber +1} of 7</h2>
    <img ${questions.image}/>
    <section class="headStyle questionArea result">
    <h4 class="result"> Incorrect. <br> The correct answer is:</h4>
    <h3 class="result">${questions.answer}</h3>
    <button type="submit" id="next" value="submit">Next</button>
    </section>`);
            $("main").html(inCorrectResponse);
            scoreWrong = scoreWrong + 1;
        }
    })
}
//shows the next question when the next button is clicked
function nextQuestion() {
    $("main").on("click", "#next", function (event) {
        event.preventDefault();
        console.log("Don't turn back");
        questionNumber = questionNumber + 1;
        console.log(questionNumber);
        if (questionNumber > 6) {
            finalPage()
        } else {
            renderQuestion();
        }
    })
}
//Shows the final results of quiz and allows the user to start again
function finalPage() {
    const finalPageTemplate = $(`
    <div class="headStyle" align="center">
    <h3>Thanks for taking the quiz! <br> You answered ${score} questions correctly out of 7.</h3>
    <form> <button>Start Over</button> </form>
    </div>`);
    $("main").html(finalPageTemplate);
}
// funcition which initalizes event listeners
function init() {
    checkAnswer();
    startQuiz();
    nextQuestion();
}
//makes the selection stay styled so it's easier to see which response is about to be selected.
$('input').on('click', function () {
    $('input').removeClass('selected');
    $(this).addClass('selected');
});
//starts the function that initalizes event listeners.
$(init)
//section is not a good CSS reference or name, make the different boxes different (header, question, responses)