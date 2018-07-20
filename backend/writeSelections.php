<?php
	// This script expects data to be sent via POST as JSON in the format:
	//	{
	//		"name": "John Smith",
	//		"pie": "Sample Pie"
	//	}
	//
	// It then saves it in a json file, or updates an existing listing with the same name.
	// Essentially, "name" acts as a unique ID.

	header("Access-Control-Allow-Origin: *");

	if (isset($_POST["json"])){
		$jsonRecieved = $_POST["json"];
		$selectionObj = json_decode($jsonRecieved, true);

		// check if selections.json file exists, only needed for initial run
		if (! file_exists("selections.json")){
			$selectionsFile = fopen("selections.json", "w");
			fwrite($selectionsFile, "{}");
			fclose($selectionsFile);
		}

		$selectionsFile = fopen("selections.json", "r");
		$currentSelections = json_decode(
			fread($selectionsFile, filesize("selections.json"))
			, true);
		fclose($selectionsFile);

		// check data has been sent with correct names
		if ( ($selectionObj["name"] == "") || ($selectionObj["pie"] == "") ){
			http_response_code(400);
			exit();
		}

		// Check current selections for if the selection should be updated or a new one created
		$newSelectionName = $selectionObj["name"];
		$newSelectionPie = $selectionObj["pie"];

		$hasChanged = false;
		for ($i=0; $i<count($currentSelections); $i++){
			if ($currentSelections[$i]["name"] == $newSelectionName){
				$currentSelections[$i]["pie"] = $newSelectionPie;
				$hasChanged = true;
			}
		}

		// add entry if one doesn't already exist
		if (! $hasChanged){
			array_push($currentSelections, ["name"=>$newSelectionName, "pie"=>$newSelectionPie]);
		}


		// encode and write new selections
		$jsonToWrite = json_encode($currentSelections);
		$selectionsFile = fopen("selections.json", "w");
		fwrite($selectionsFile, $jsonToWrite);
		fclose($selectionsFile);


		http_response_code(200);
	} else {
		error_log("error: JSON not posted");
		// Send bad request response
		http_response_code(400);
	}
?>