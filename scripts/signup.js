var form, name, email, username, password, password2;
var inputGroup;
var submitBtn;
const defaultUsers = '{"users": [{"id": 1, "username": "testUser1", "password":"abc123", "name":"John Doe", "email":"john.doe@gmail.com"}, {"id": 2, "username": "testUser2", "password":"qwerty", "name":"Jane Smith", "email":"jane.smith@gmail.com"}]}';
const users1 = JSON.parse(defaultUsers).users; // array
var users2;

window.addEventListener("load", start, false);

function start() {
		form = document.getElementById("form");
		name = document.getElementById("name");
		email = document.getElementById("email");
  	username = document.getElementById("username");
  	password = document.getElementById("password");
  	password2 = document.getElementById("password2");
  	submitBtn = document.getElementById("submitBtn");

  	
  	if (localStorage.getItem("addedUsers") === null) {
  		users2 = null;
  	} else {
  		users2 = JSON.parse(localStorage.getItem("addedUsers")).users;
  	}

  	form.addEventListener('submit', function (event) {

  		/* Check if form is valid before submitting */
  		var isValid = validateForm();

        if (!isValid) { // if invalid, stop page from submitting form
          
          event.preventDefault();
          event.stopPropagation();

          invalidDiv.className = "alert alert-danger";
          invalidDiv.innerHTML = "The username or password is incorrect. Please try again."
        } 
        
    }, false);
}

function validateForm() {

	// need to validate username and password; set up database somewhere?

	// check default user array
	for (var i = 0; i < users1.length; i++) {
		if (users1[i].username == username.value) { // if username is found in users1

			if (users1[i].password == password.value) { // check if password is correct
				return true;
			} else {
				return false;
			}
		} 
	}

	// check added user array if not null
	if (users2 !== null) {
		for (var i = 0; i < users2.length; i++) {
			if (users2[i].username == username.value) { // if username is found in users2

				if (users2[i].password == password.value) { // check if password is correct
					return true;
				} else {
					return false;
				}
			} 
		}
	}

	return false;
	
}