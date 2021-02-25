<?php

	$executionStartTime = microtime(true) / 1000;


	if($_REQUEST['api'] == "first"){
		$url = 'http://api.geonames.org/citiesJSON?formatted=true&north='. $_REQUEST['north'] .'&south='. $_REQUEST['south'] .'&east='. $_REQUEST['east'] .'&west='. $_REQUEST['west'] .'&lang=en&username=radubradu';
	}elseif($_REQUEST['api'] == "second"){
		$url = 'http://api.geonames.org/wikipediaSearchJSON?q='. $_REQUEST['city'] .'&username=radubradu';
	}elseif($_REQUEST['api'] == "third"){
		$url = 'http://api.geonames.org/postalCodeCountryInfoJSON?username=radubradu';
	}


	$ch = curl_init();
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch, CURLOPT_URL,$url);

	$result=curl_exec($ch);

	curl_close($ch);

	$decode = json_decode($result,true);	

	$output['status']['code'] = "200";
	$output['status']['name'] = "ok";
	$output['status']['description'] = "mission saved";
	$output['status']['returnedIn'] = (microtime(true) - $executionStartTime) / 1000 . " ms";
	$output['data'] = $decode['geonames'];
	
	header('Content-Type: application/json; charset=UTF-8');

	echo json_encode($output); 

?>
