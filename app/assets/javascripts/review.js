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

//submit review
function submitReview(data) {
	let review;

	try {
		review = $.ajax({
			url: '/reviews',
			type: 'POST',
			data: $(data).serialize(),
			dataType: 'json'
		})

		if (review) {
			buildReview(review);
		}
	}
}

//build review
function buildReview(review) {

}

//submit form
function submitFormListener() {
	$('#new_review').submit(function(ele) {
		ele.preventDefault();
        submitReview(this);
	})
}

//append 