<?php
	header("Access-Control-Allow-Origin: *");
	header('Content-Type: application/json');
	
	if (file_exists("selections.json")){
		$myfile = fopen("selections.json", "r");
		$json = fread($myfile, filesize("selections.json"));
		fclose($myfile);

		echo $json;
	} else {
		echo "{'error_message': 'The selections.json file is not created'}";
	}
?>