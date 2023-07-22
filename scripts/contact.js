var form, firstName, lastName, emailAddress, message;
var inputGroup;
var submitBtn;

window.addEventListener("load", start, false);

function start() {
	form = document.getElementById("form");
  	firstName = document.getElementById("firstName");
  	lastName = document.getElementById("lastName");
  	emailAddress = document.getElementById("emailAddress");
  	message = document.getElementById("message");
  	submitBtn = document.getElementById("submitBtn");

  	inputGroup = [firstName, lastName, emailAddress, message];

  	form.addEventListener('submit', function (event) {

  		/* Check if form is valid before submitting */
  		var isValid = validateForm();
        if (!isValid) { // if invalid, stop page from submitting form
          
          event.preventDefault();
          event.stopPropagation();
        } 
        
    }, false);
}


function validateForm() {

	var allValid = true;
	var firstError;

	/* Check the input in the array */
	inputGroup.forEach(function(input) {

		if (!input.checkValidity()) {
			allValid = false;
			input.classList.add("is-invalid");
			input.addEventListener("input", function(){removeInvalid(input);}, false);

			if (firstError == null) {
				firstError = input;
				input.focus();
			}
		} 
	});

	return allValid;
	
}

function removeInvalid(input) {
		input.classList.remove("is-invalid");
}
