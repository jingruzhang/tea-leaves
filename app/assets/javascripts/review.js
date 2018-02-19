//document ready and addlistener

//class Review

//listen click for adding review
function addReviewListener() {
	$("#add-review").click(function(ele) {
		ele.preventDefault();
		loadForm();
	})
}
//load form
function loadForm() {
	let form = HandlebarsTemplates['reviews/new'](currentTea);
	$('#clicked-tea').append(form);
	submitFormListener();
}

//submit form
function submitFormListener() {
	
}

//append 