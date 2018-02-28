let currentUser;
let currentTea;


//check for loggedin user
function getUser() {
	$.getJSON('/loggedin_user', { format: 'json' }).then(resp => currentUser = resp);
}


$(document).on('turbolinks:load', function() {
	getUser();
	teaClickListener();
	nextTypeListener(); 
	previousTypeListener();
});