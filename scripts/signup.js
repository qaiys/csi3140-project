var form, name1, email, username, password, password2;
var submitBtn;
const defaultUsers = '{"users": [{"id": 1, "username": "testUser1", "password":"abc123", "name":"John Doe", "email":"john.doe@gmail.com"}, {"id": 2, "username": "testUser2", "password":"qwerty", "name":"Jane Smith", "email":"jane.smith@gmail.com"}]}';
var usersMain;
const users1 = JSON.parse(defaultUsers).users; // array
var users2;

window.addEventListener("load", start, false);

function start() {
		form = document.getElementById("form");
		name1 = document.getElementById("name");
		email = document.getElementById("email");
  	username = document.getElementById("username");
  	password = document.getElementById("password");
  	password2 = document.getElementById("password2");
  	submitBtn = document.getElementById("submitBtn");

  	if (localStorage.getItem("addedUsers") === null) {
  		users2 = null;
  	} else {
  		usersMain = JSON.parse(localStorage.getItem("addedUsers"));
  		users2 = usersMain.users;
  	}

  	form.addEventListener('submit', function (event) {

  		/* Check if form is valid before submitting */
  		var isValid = validateForm();

        if (!isValid) { // if invalid, stop page from submitting form
          
          event.preventDefault();
          event.stopPropagation();
        } else {

        	/* store new user data into local storage*/
        	if (users2 === null ) {
        		
        		// create object from user data
        		const newObj = {users: [{id: 1, username: username.value, password: password.value, name: name1.value, email: email.value}]};
        		const myJSON = JSON.stringify(newObj);
        		localStorage.setItem("addedUsers", myJSON);
        	} else {
        		
        		const newUser = {id: users2.length+1, username: username.value, password: password.value, name: name1.value, email: email.value}
        		users2.push(newUser);
        		const myJSON = JSON.stringify(usersMain);
        		localStorage.setItem("addedUsers", myJSON);
        	}
        }
        
    }, false);
}

function validateForm() {

	var allValid = true;

	/* 1) check that username is unique */
	for (var i = 0; i < users1.length; i++) {
			if (users1[i].username == username.value) { // if username is found in users1
				username.classList.add("is-invalid"); 
				username.addEventListener("change", function(){removeInvalid(username);}, false);
				allValid = false;
			} 
		}


	if (users2 !== null) { // check addedUsers array too if exists
		for (var i = 0; i < users2.length; i++) {
			if (users2[i].username == username.value) { // if username is found in users2
				username.classList.add("is-invalid"); 
				username.addEventListener("change", function(){removeInvalid(username);}, false);
				allValid = false;
			} 
		}
	}

	/* 2) check that password == password2 */
	if (password.value != password2.value) {
			password2.classList.add("is-invalid");
			password2.addEventListener("change", function(){removeInvalid(password2);}, false);
			allValid = false;
	}
	

	return allValid;
	
}

function removeInvalid(input) {
		input.classList.remove("is-invalid");
}