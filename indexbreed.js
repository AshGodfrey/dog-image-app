function findBreed(){
	let userValue = $("#dog-breed").val();
	fetch (`https://dog.ceo/api/breed/${userValue}/images/random`)
		.then(response => response.json())
		.then(responseJson => 
			displayResults(responseJson))
		.catch(error => alert('Something went wrong. Try again later.'));
	
}

function submitForm() {
	$('form').submit(event => {
    event.preventDefault();
    findBreed();
  });
}

function displayResults(responseJson) {
	console.log(responseJson);
	let error = responseJson.code;
	if (error == 404) {
		alert ("Please try entering a different dog breed, or check your spelling")
	} else {
		$('#images').html(`<img src="${responseJson.message}" class="results-img">`)
		$('.results').removeClass('hidden');
	}
  
}

submitForm();