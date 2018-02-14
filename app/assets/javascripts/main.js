let currentUser;

//check for loggedin user
function getUser() {
	$.getJSON('/loggedin_user', { format: 'json' }).then(resp => currentUser = resp);
}

//load corresponding listeners based on current pages

