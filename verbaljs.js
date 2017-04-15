var questions = [{
    question: "Question 1: In Europe, football, otherwise known as soccer, it the most popular sport by several orders of magnitude, whereas in America, fandom is fairly evenly __________ among a few different sports.",
    choices: ["regarded","inspired","enjoyed","measured","apportioned" ],
    correctAnswer: 4
}, {
     question: "Question 2: The astrophysicist argues that our books and films about interstellar space travel are a form of mass _________, and that only a miracle on a scale heretofore unseen could allow a human being to voyage to even the closest star in another solar system.",
    choices: ["innovation", "delusion", "dementia", "catastrophe","hysteria"],
    correctAnswer: 1
}, {
     question: "Question 3: On an aptitude test in 1986, an argument posited that the possibility of conducting banking transactions from home was as likely as flying cars, an argument that today sounds ___________.",
    choices: ["prescient", "paradoxical", "presumptuous", "pitiful", "preposterous"],
    correctAnswer: 4
}, {
     question: "Question 4: Napoleon is of course most famous for his military triumphs, but his innovative code of law had a subtler but more _____ impact, as its principles strongly influenced legal codes well into the 20th century.",
    choices: ["renowned", "enduring", "fleeting", "insidious", "martial"],
    correctAnswer: 1
}, {
     question: "Question 5: Many ___________ people feared for the life of Ronald Reagan because since 1840, every president elected in a year ending in zero had died in office.",
    choices: ["knowledgeable", "mathematical", "superstitious", "addled", "conservative"],
    correctAnswer: 2
},
{
     question: "Question 6: Every generation is accused of slacking by the preceding ones, before in turn calling their own progeny lackadaisical; such is the _________ of life.",
    choices: ["vicissitude", "irony", "superstitious", "circle", "serendipity", "comedy"],
    correctAnswer: 2
},
{
     question: "Question 7: Although retired, the professor takes pains to remain _________ the latest developments in her field.",
    choices: ["akimbo to", "abreast of", "obtuse to", "subservient to", "askance to"],
    correctAnswer: 1
},
{
    question:"Question 8: After the US Civil War, “carpetbaggers”—so-called because they carried suitcases made of inexpensive carpeting material— _________ the South, hoping to turn a quick profit.",
    choices:["vanquished", "inundated", "blacklisted", "boycotted", "berated"],
    correctAnswer: 1
},
{
    question:"Question 9: December’s earthquake was but a _________ to a terrible year for a small island nation recently wracked by civil strife and devastating tropical storms.",
    choices:["prologue", "catharsis", "coda", "homily", "rampage"],
    correctAnswer: 2
},
{
    question:"Question 10: After many years of war and bloodshed, some became _________ suffering, casting a blind eye to scenes of misery around them.",
    choices:["inured to", "exempted from", "dominant over", "effusive towards", "maudlin over"],
    correctAnswer: 0
},
{
    question:"Question 11: After a brief initial struggle over power, the group elected a leader and _________ into a surprisingly harmonious team.",
    choices:["fractured", "syncopated", "coalesced", "agglomerated", "amortized"],
    correctAnswer: 2
},
{
    question:"Question 12: The director inserted deliberate _________ into the play—for example, Hamlet typed his letters to Ophelia on alaptop.",
    choices:["platitudes", "paradigms", "neologisms", "derivations", "anachronisms"],
    correctAnswer: 4
},
{
    question:"Question 13: The ancient tablet presents a true _________: none have been able to decode it.",
    choices:["gem", "stanza", "quagmire", "enigma", "incentive"],
    correctAnswer: 3
},
{
    question:"Question 14: Just as reminiscences of a childhood spent in rural Mexico color the poet’s work, so too does the experience of war _________ her poetry.",
    choices:["inform", "mimic", "invalidate", "defer", "presage"],
    correctAnswer: 0
},
{
    question:"Question 15: The substitute French teacher accidentally walked into the wrong classroom, creating _________ situation when she began speaking French to 15 mystified physics students.",
    choices:["an odious", "a potable", "a risible", "a cursory", "an arch"],
    correctAnswer: 2
},
{
    question:"Question 16:The beauty pageant contestant told the judges she wanted world peace, but her suggestion to bring about world peace was _________ —apparently, she naively thinks everyone could just be told to “love one another” and all the world’s disagreements would fade away.",
    choices:["convoluted", "facile", "impeccable", "amicable", "dulcet"],
    correctAnswer: 1
},
{
    question:"Question 17: Introverts prefer a quiet, reflective lifestyle, whereas extroverts are more _________.",
    choices:["doctrinaire", "convivial", "sanguinary", "jejune", "modish"],
    correctAnswer: 1
},
{
    question:"Question 18: The transformation of the NFL from a running-oriented game to a passing-oriented game demonstrates that, in any profession, when the _________ proves more successful than the time-honored, industry leaders will embrace the new with alacrity.",
    choices:["aerial", "exciting", "novel", "conventional", "controversial"],
    correctAnswer: 2
},
{
    question:"Question 19: After struggling to maintain her composure for hours upon hearing of her late husband’s infidelities, the recently bereaved widow finally burst into _________.",
    choices:["hysterics", "laughter", "song", "mirth", "flames"],
    correctAnswer: 0
},
{
    question:"Question 20: For centuries, commercial portrait painters have employed a bifurcated aesthetic: like other artists, they strive to represent the truth that gives their works life, but commerce dictates that they simultaneously employ subtle _________ that make the likeness more attractive than the sitter.",
    choices:["palettes", "aesthetics", "artifacts", "artifices", "sentiments"],
    correctAnswer: 3
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

