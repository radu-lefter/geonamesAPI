	
	$(window).on('load', function () {    if ($('#preloader').length) { 
		$('#preloader').delay(100).fadeOut('slow', function () {  
		$(this).remove();      });    }});

	$('#firstAPI').click(function() {
		
		$.ajax({
			url: "libs/php/getAPIsInfo.php",
			type: 'POST',
			dataType: 'json',
			data: {
				api: "first",
				north: $('#north').val(),
				south: $('#south').val(),
				east: $('#east').val(),
				west: $('#west').val()
			},
			success: function(result) {

				console.log(result);

				if (result.status.name == "ok") {

					$('#column_one').html("Name: " + result['data'][0]["name"]);
					$('#column_two').html("Population: " + result['data'][0]["population"]);
					
					
				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
				console.log("An error has occured!");
			}
		}); 
	

	});

	$('#secondAPI').click(function() {
		$('#column_one').html("");
		$.ajax({
			url: "libs/php/getAPIsInfo.php",
			type: 'POST',
			dataType: 'json',
			data: {
				api: "second",
				city: $('#city').val()
			},
			success: function(result) {

				console.log(result);

				if (result.status.name == "ok") {

					
					$('#column_two').html(result['data'][0]["summary"]);
					
				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
				console.log("An error has occured!");
			}
		}); 
	

	});

	$('#thirdAPI').click(function() {
		
		$.ajax({
			url: "libs/php/getAPIsInfo.php",
			type: 'POST',
			dataType: 'json',
			data: {
				api: "third"
				
			},
			success: function(result) {

				console.log(result);

				if (result.status.name == "ok") {

					
					$('#column_one').html("Country Code "+"<br>"+result['data'][0]["countryCode"]+"<br>"+result['data'][1]["countryCode"]+"<br>"+result['data'][2]["countryCode"]+"<br>"+result['data'][3]["countryCode"]+"<br>"+result['data'][4]["countryCode"]+"<br>"+result['data'][5]["countryCode"]+"<br>"+result['data'][6]["countryCode"]);
					$('#column_two').html("Country Name "+"<br>"+result['data'][0]["countryName"]+"<br>"+result['data'][1]["countryName"]+"<br>"+result['data'][2]["countryName"]+"<br>"+result['data'][3]["countryName"]+"<br>"+result['data'][4]["countryName"]+"<br>"+result['data'][5]["countryName"]+"<br>"+result['data'][6]["countryName"]);
					
				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
				console.log("An error has occured!");
			}
		}); 
	

	});