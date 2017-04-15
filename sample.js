$(document).write(function()
{
	var questions=[
	{
		question: "The sum of the digits of a two-digit number is 12. If the digits are interchanged, the resulting number is 18 more than the original number. Find the original number.",
		choices:[37,57,54,47],
		correctAnswer:2
	},

	{
		question: "If 4a=3b, find (7a+9b) : (4a+5b)",
		choices:[57/32,57/42,82/57,32/57],
		correctAnswer: 0
	},

	{
		question: "What is the right answer?",
		choices:[1,2,3,4],
		correctAnswer: 2
	},

	{
		question: "What is the right answer",
		choices: [1,2,3,4],
		correctAnswer: 3
	},

	{
		question: "Right answer?",
		choices: [1,2,3,4],
		correctAnswer:0
	}];

	var questionCounter = 0; //Tracks the question number
	var selections = []; //Contains user choices
	var quiz = $('#quiz'); //The quiz div object

	//Display initial question
	displayNext();

	//Click handler for the 'next' button
	$('#next').on('click',function(e)
	{
		e.preventDefault();

		//Suspend clock listener during fade animation
		if(quiz.is(':animated'))
		{
			return false;
		}
		choose();

		//IF no user selection, stop progress
		if(isNan(selections[questionCounter]))
		{
			alert('Make a selection');
		}
		else
		{
			questionCounter++;
			displayNext();
		}
	});

	//Click handler for 'prev'
	$('#prev').on('click',function(e)
	{
		if(quiz.is(':animated'))
		{
			return false;
		}
		choose();
		questionCounter--;
		displayNext();
	});

	//Click handler for 'start over'
	$('#start').on('click', function(e)
	{
		e.preventDefault();

		if(quiz.is(':animated'))
		{
			return false;
		}
		questionCounter=0;
		selections=[];
		displayNext();
		$('#start').hide();
	});

	//Div for containing the questions and answer selection
	function createQuestionElement(index)
	{
		var qElement = $('<div',
		{
			id:'question'
		});

		var header= $('<h2>Question ' + (index + 1) + ':</h2>');
		qElement.append(header);

		var question = $('<p>').append(questions[index].question);
		qElement.append(question);

		var radioButtons = createRadios(index);
		qElement.append(radioButtons);

		return qElement;
	}

	//Creates radio buttons
	function createRadios(index)
	{
		var radioList = $('<ul>');
		var item;
		var input = '';

		for(var i = 0; i < questions[index].choices.length; i++)
		{
			item=$('<li>');
			input = '<input type="radio" name="answer" value=' +i+'/>';
			input+=questions[index].choices[i];
			item.append(input);
			radioList.append(item);
		}
		return radioList;
	}

	//Reads user input into an array
	function choose()
	{
		selections[questionCounter] = +$('input[name="answer"]:checked').val();
	}

	//Displays next element
	function displayNext()
	{
		quiz.fadeout(function()
		{
			$('#question').remove();

			if(questionCounter<questions.length)
			{
				var nextQuestion=createQuestionElement(questionCounter);
				quiz.append(nextQuestion).fadeIn();

				if(!(isNaN(selections[questionCounter])))
				{
					$('input[value=' +selections[questionCounter]+']').prop('checked',true);
				}

				if(questionCounter===1)
				{
					$('#prev').show();
				}
				else if(questionCounter===0)
				{
					$('#prev').hide();
					$('#next').show();
				}
			}

			else
			{
				var scoreElem = displayScore();
				quiz.append(scoreElem).fadeIn();
				$('#next').hide();
				$('#prev').hide();
				$('#start').show();
			}
		});
	}

	//Computes and returns score
	function displayScore()
	{
		var score = $('<p>', 
		{
			id: 'question'
		});

		var numCorrect=0;
		for(var i = 0; i < selections.length; i++)
		{
			if(selections[i]===questions[i].correctAnswer)
			{
				numCorrect++;;
			}
		}

		score.append('You got ' + numCorrect + ' questions out of ' + questions.length + ' right!');
		return score;
	}
})();