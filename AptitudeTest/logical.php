<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" type="text/CSS" href="css/quiz.css">
	<link href="https://fonts.googleapis.com/css?family=Julius+Sans+One|Open+Sans+Condensed:300|Quicksand|Raleway" rel="stylesheet">
	<link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet">
	<link href="dist/css/bootstrap-material-design.css" rel="stylesheet">
	<link href="dist/css/ripples.min.css" rel="stylesheet">
	<link href="//cdn.rawgit.com/FezVrasta/dropdown.js/master/jquery.dropdown.css" rel="stylesheet">
	<script type="text/JavaScript" src="js/logical.js"></script>
	<script type="text/JavaScript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
</head>
<body>

<div class="row">

<div class="col-3 col-m-3">
	<header>
		<ul>
			<li><a href='login.php'> Sign Out</a></li>
			<li> <a href='about.php'>About</a></li>
			<li> <a href='welcome.php'>Menu</a></li>
			
		</ul>
	</header>
</div>

<div class="col-6 col-m-9">
<div class="quizContainer">
     <h1>Logical Analysis</h1>

    <div class="question"></div><br>
    <ul class="choiceList"></ul><br><br><br>
    <div class="quizMessage"></div><br><br><br>
    <div class="result"></div><br><br>
    <button><div class="nextButton">Next Question</div></button>
    <button><div class="prevButton">Previous Question</div></button>
    <script type="text/JavaScript" src="js/logical.js"></script>
    <br>
    </div>    
 
</div>

<div class="col-3 col-m-12">

</div>

</div>

<div class="footer">
</div>

</body>
</html>
