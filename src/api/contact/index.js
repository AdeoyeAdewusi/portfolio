<?php
header("Access-Control-Allow-Origin: *");
$rest_json = file_get_contents("php://input");
$_GET = json_decode($rest_json, true);

if (empty($_GET['name']) && empty($_GET['email'])) die();

if ($_GET)
	{

	// set response code - 200 OK

	http_response_code(200);
	$subject = $_GET['name'];
	$to = "agbajeolaiwola@gmail.com";
	$from = $_GET['email'];

	// data

	$msg = $_GET['message'];

	// Headers

	$headers = "MIME-Version: 1.0\r\n";
	$headers.= "Content-type: text/html; charset=UTF-8\r\n";
	$headers.= "From: <" . $from . ">";
	mail($to, $subject, $msg, $headers);

	// echo json_encode( $_POST );

	echojson_encode(array(
		"sent" => true
	));
	}
  else
	{

	// tell the user about error

	echojson_encode(["sent" => false, "message" => "Something went wrong"]);
	}

?>