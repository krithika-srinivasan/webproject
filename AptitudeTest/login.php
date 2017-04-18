<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" type="text/CSS" href="css/logstylesheet.css">
<link href="https://fonts.googleapis.com/css?family=Julius+Sans+One|Open+Sans+Condensed:300|Quicksand|Raleway" rel="stylesheet">
</head>
<body>



<div class="row">

<div class="col-3 col-m-3">
  
</div>

<div class="col-6 col-m-9">
  <h1>Let's Take A Quiz.</h1>
  <form action="#" method="POST">
    <input type="email" placeholder="Email ID" name="email"><br>
    <input type="password" placeholder="Password" name="password"><br>
    <input type="submit" name="submit" value="Login">
   </form>
   <?php
   session_start();
   if(isset($_POST['submit']))
   {
      mysql_connect('localhost','root','') or die(mysql_error());
      mysql_select_db('test') or die(mysql_error());
      $email=$_POST['email'];
      $password=$_POST['password'];
      if($email!=''&&$password!='')
      {
         $query=mysql_query("select email,password from user where email='".$email."' and password='".$password."'") or die(mysql_error());
         $res=mysql_fetch_row($query);
         if($res)
         {
         $_SESSION['email']=$email;
         header('location:welcome.php');
         }
         else
         {
            echo'Incorrect email ID or password';
         }
      }
      else
      {
         echo'Enter both email ID and password';
      }
   }  
   ?>
</body>
</html>
</div>

<div class="col-3 col-m-12">

</div>

</div>

<div class="footer">
</div>

</body>
</html>
