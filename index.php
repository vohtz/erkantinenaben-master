<?php

require_once('classes/date.php');
$hour = date('Hi');
$day = date('D');
$date = new Date($hour, $day);

?>
<!DOCTYPE html>
<html>
	<head>
		<link type="text/css" rel="stylesheet" href="css/style.css" />
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<link href='http://fonts.googleapis.com/css?family=Open+Sans:300italic,400,700' rel='stylesheet' type='text/css'>
		<title>Er kantinen åben?</title>
	</head>
	<body>
		<span id="countdown"> </span>
		<div id="mainWrapper">
			<div id="heading">
				<h1>Er kantinen åben?</h1>
			</div>
			<div id="option">
				<h2>
					<?php echo $date->displayDate(); ?>
				</h2>
				
			</div>
		</div>
		<div id="countdown">
			<span class="days">00</span> Dage
			<span class="hours">00</span> Timer
			<span class="mins">00</span> Minutter
			<span class="secs">00</span> Sekunder
		</div>
		<div id="schema">
			<p>
				Man-Tor: 7.45 - 12.45 / 13.30 - 14.20 <br />
				Fredag: 7.45 - 12.45
			<p>	
		</div>
		<script src="http://code.jquery.com/jquery-latest.min.js" type="text/javascript"></script>
		<script src="js/jquery.plugin.min.js"></script>
		<script src="js/jquery.countdown.min.js"></script>
		<script src="js/animate_answer.js"></script>
<<<<<<< HEAD
		<script src="js/countdown.js"></script>
=======
		<script type="text/javascript" src="js/countdown.jquery.js"></script>
		<script type="text/javascript" src="js/ext.js"></script>
>>>>>>> frontend
	</body>
</html>
