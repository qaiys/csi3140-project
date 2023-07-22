var form, username, password, invalidDiv;
var inputGroup;
var submitBtn;


window.addEventListener("load", start, false);

function start() {
	form = document.getElementById("form");
  	username = document.getElementById("username");
  	password = document.getElementById("password");
  	invalidDiv = document.getElementById("incorrectCredentials");
  	submitBtn = document.getElementById("submitBtn");


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

	// need to validate username and password; set up database somewhere?
	
	return allValid;
	
}