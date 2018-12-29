function getDogImages(){
	let userValue = $("#number-of-dogs").val();
	if ($.isNumeric(userValue)){
		if (userValue > 50 || userValue < 1) {
			alert ("you must choose a number between 1 and 50")
		} else {
			fetch (`https://dog.ceo/api/breeds/image/random/${userValue}`)
			 .then(response => response.json())
		    .then(responseJson => 
		      displayResults(responseJson))
		    .catch(error => alert('Something went wrong. Try again later.'));
		}
	} else {
		alert ("you must enter a whole number")
	}
	
}

function submitForm() {
	$('form').submit(event => {
    event.preventDefault();
    getDogImages();
  });
}

function displayResults(responseJson) {
	console.log(responseJson);
	let arrayLength = responseJson.message.length;
	for (var i=0; i < arrayLength; i++){
		$('#images').append(`<img src="${responseJson.message[i]}" class="results-img">`)
	}
	//$('#images').html(
	   // `<img src="${responseJson.message[0]}" class="results-img">
	    //<img src="${responseJson.message[1]}" class="results-img">
	    //<img src="${responseJson.message[2]}" class="results-img">
	   // <img src="${responseJson.message[3]}" class="results-img">`
	   // )
	//for (var i=0; i < arrayLength; i++){
		//$('.results-img').replaceWith(
	    //`<img src="${responseJson.message[i]}" class="results-img">`
  //)
	//}
  //display the results section
  $('.results').removeClass('hidden');
}



submitForm();


