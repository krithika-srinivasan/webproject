var questions = [{
    question: "Question 1: The sum of the digits of a two-digit number is 12. If the digits are interchanged, the resulting number is 18 more than the original number. Find the original number.",
    choices: ["37","57","54","47"],
    correctAnswer: 2
}, {
     question: "Question 2: If 4a=3b, find (7a+9b) : (4a+5b)",
    choices: ["57/32", "57/42", "82/57", "32/57"],
    correctAnswer: 0
}, {
     question: "Question 3: If a : b = 2 : 3 and b : c = 5 : 7 , find a : b : c",
    choices: ["10 : 15 : 21", "10 : 21 : 15", "9 : 12 : 14", "12 : 7 : 18"],
    correctAnswer: 0
}, {
     question: "Question 4: There are two colleges – A & B. There are 500 more students in College A than in B. The ratio of boys to that of girls in college A is 3:2 and in college B is 4:1. The ratio of no. of Science, HR and Commerce students in College A and College B are 2:5:3 and 2:3:3 respectively. The numbers of Commerce students in both colleges are same. How many students are there in College A? ",
    choices: ["2000", "2900", "2500", "4000"],
    correctAnswer: 2
}, {
     question: "Question 5: There are two colleges – A & B. There are 500 more students in College A than in B. The ratio of boys to that of girls in college A is 3:2 and in college B is 4:1. The ratio of no. of Science, HR and Commerce students in College A and College B are 2:5:3 and 2:3:3 respectively. The numbers of Commerce students in both colleges are same. How many girls are there in two colleges together?",
    choices: ["1700", "1800", "2000", "1400"],
    correctAnswer: 3
},
{
     question: "Question 6: Cost price of 6 oranges is equal to selling price of 8 oranges. Find % profit or Loss.",
    choices: ["20%", "25%", "50%", "Cannot be determined"],
    correctAnswer: 1
},
{
     question: "Question 7: Prakash calculates his profit on SP and finds it to be 20%. What is his actual profit percentage?",
    choices: ["75%", "25%", "20%", "45%"],
    correctAnswer: 1
},
{
    question:"Question 8: 80 is what percentage of 64?",
    choices:["85%", "75%", "120%", "125%"],
    correctAnswer: 3
},
{
    question:"Question 9: If a certain sum doubles in 5 years under simple interest, in how many years would it become 6 times itself at the same rate of interest?",
    choices:["20 years", "30 years", "15 years", "25 years"],
    correctAnswer: 3
},
{
    question:"Question 10:The average age of a family of four members A.B.C.D is 15 years. Find their average age after 5 Years.",
    choices:["10", "20", "15", "25"],
    correctAnswer: 1
},
{
    question:"Question 11:A vessel contains 10 litres of pure milk. 1 liter of milk is taken out and replaced by an equal amount of water. 1 liter of the mixture is then taken out and replaced by equal amount of water. Find the ratio of milk and water in the final mixture.",
    choices:["81:19", "81:9", "81:100", "19:81"],
    correctAnswer: 0
},
{
    question:"Question 12: In question 11 find the final quantity of milk in liters.",
    choices:["9", "8.1", "7.29", "None of the above"],
    correctAnswer: 1
},
{
    question:"Question 13: Find average of (5+5+ . . . . . . . up to 100 times) and (8+8+ . . . . . up to 200 times)",
    choices:["6", "7", "6.5", "7.5"],
    correctAnswer: 1
},
{
    question:"Question 14: The average of 11 consecutive natural numbers is x. If sixth number is 12, find x.",
    choices:["9", "10", "18", "None of the above"],
    correctAnswer: 3
},
{
    question:"Question 15: G and H can complete a job in 24 days working together. G can complete the work above in 32 days. Both of them worked together for 8 days and then G left. In how many days will H complete the remaining work? (in days)",
    choices:["74", "64", "24", "54"],
    correctAnswer: 1
},
{
    question:"Question 16:Three taps A, B, C together can fill a tank in 4 hours. After 1 hour, tap C is closed and tank is filled in 6 more hours. Find the time in which C alone can fill the empty tank.",
    choices:["9 hours", "7 hours", "8 hours", "12 hours"],
    correctAnswer: 2
},
{
    question:"Question 17: Find angle (in degrees) between hands of the clock at 2:30PM",
    choices:["120", "109", "105", "100"],
    correctAnswer: 2
},
{
    question:"Question 18: P beats Q by 125 m in a kilometer race. Find Q’s speed if P’s speed is 16 m/s.",
    choices:["14 m/s", "21 m/s", "7 m/s", "18 m/s"],
    correctAnswer: 0
},
{
    question:"Question 19: Find 10th term of an A.P whose first term is 2 and common difference is 3",
    choices:["31", "27", "29", "28"],
    correctAnswer: 2
},
{
    question:"Question 20: Given the word ADROIT, how many words beginning with the letter T can be formed out of it?",
    choices:["60", "120", "100", "90"],
    correctAnswer: 1
}
];

var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;

$(document).ready(function () {

    // Display the first question
    displayCurrentQuestion();
    $(this).find(".quizMessage").hide();

    // On clicking next, display the next question
    $(this).find(".nextButton").on("click", function () {
        if (!quizOver) { //If the quiz isn't over

            value = $("input[type='radio']:checked").val(); //If an answer has been checked

            if (value == undefined) {
                /*$(document).find(".quizMessage").text("Please select an answer"); //Show the alert if an answer hasn't been checked
                $(document).find(".quizMessage").show();*/
                alert("Please select an answer");
            } else { //If a value has been selected
                // TODO: Remove any message -> not sure if this is efficient to call this each time....
                $(document).find(".quizMessage").hide(); //Remove the message asking to pick an answer

                if (value == questions[currentQuestion].correctAnswer) { //Increment counter for correct answer
                    correctAnswers++;
                }

                currentQuestion++; // Since we have already displayed the first question on DOM ready
                if (currentQuestion < questions.length) {
                    displayCurrentQuestion();
                } else {
                    displayScore();
                    //                    $(document).find(".nextButton").toggle();
                    //                    $(document).find(".playAgainButton").toggle();
                    // Change the text in the next button to ask if user wants to play again
                    $(document).find(".nextButton").text("Retry?");
                    quizOver = true;
                }
            }
        } else { // quiz is over and clicked the next button (which now displays 'Play Again?'
            quizOver = false;
            $(document).find(".nextButton").text("Next Question");
            resetQuiz();
            displayCurrentQuestion();
            hideScore();
        }
    });

    //$(this).find(".nextButton").on("click", function () {   
    $(this).find(".prevButton").on("click", function(){
            if(currentQuestion > 0){
                currentQuestion--;
                displayPreviousQuestion();
            }
    });   
});

// This displays the current question AND the choices
function displayCurrentQuestion() {

    console.log("In display current Question"); //Prints message in browser console

    var question = questions[currentQuestion].question; //Holds the current question
    var questionClass = $(document).find(".quizContainer > .question"); //holds next question
    var choiceList = $(document).find(".quizContainer > .choiceList"); //holds question choices
    var numChoices = questions[currentQuestion].choices.length; //holds current question

    // Set the questionClass text to the current question
    $(questionClass).text(question);

    // Remove all current <li> elements (if any)
    $(choiceList).find("li").remove();

    var choice;
    for (i = 0; i < numChoices; i++) {
        choice = questions[currentQuestion].choices[i];
        $('<li><input type="radio" value=' + i + ' name="dynradio" />' + choice + '</li>').appendTo(choiceList); //Build new choice list
    }
}

function displayPreviousQuestion() {
    console.log("In display previous question")

    var question = questions[currentQuestion].question; //Holds the current question
    var questionClass = $(document).find(".quizContainer > .question"); //holds next question
    var choiceList = $(document).find(".quizContainer > .choiceList"); //holds question choices
    var numChoices = questions[currentQuestion].choices.length; //holds number of choice i.e. 4

    $(questionClass).text(question);

    $(choiceList).find("li").remove();

    var choice;

    for (i = 0; i < numChoices; i++) {
        choice = questions[currentQuestion].choices[i];
        $('<li><input type="radio" value=' + i + ' name="dynradio" />' + choice + '</li>').appendTo(choiceList);
    }

}

function resetQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    hideScore();
}

function displayScore() {
    $(document).find(".quizContainer > .question").hide();
    $(document).find(".quizContainer > .choiceList").hide();
    $(document).find(".quizContainer > .result").text("You scored: " + correctAnswers + " out of: " + questions.length);
    $(document).find(".quizContainer > .result").fadein(slow);
}

function hideScore() {
    $(document).find(".result").hide();
}

