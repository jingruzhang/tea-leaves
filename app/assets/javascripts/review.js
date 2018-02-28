//document ready and addlistener

//class Review
class Review {
	constructor(review_params) {
		this.id = review_params.id;
		this.content = review_params.content;
		this.created_at = review_params.created_at;
		this.tea = review_params.tea;
		this.user = review_params.user;
	}

	formattedDate() {
        return new Date(this.created_at).toLocaleDateString();
    }
}

//listen click for viewing reviews
function viewReviewsListener() {
	$("#js-reviews-link").click(function(ele) {
		if (currentUser != null) {
			$('#clicked-reviews').html("");
			ele.preventDefault();
			$.getJSON('/teas/' + currentTea.id + '/reviews').done(function(response) {
				response.forEach(review => buildReview(review));
			});
			addReviewListener();
		} else {
			alert("Only logged-in users can view reviews. Please sign up or log in.");
		}
	})
}

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
	$.ajax({
		url: '/teas/' + currentTea.id + '/reviews',
		type: 'POST',
		headers: {'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')},
		data: $(data).serialize(),
		dataType: 'json',
		success: function (response) {
			buildReview(response);
		}
	})
}

//build review
function buildReview(review_params) {
	let review = new Review(review_params);
	loadReview(review);
}

//submit form
function submitFormListener() {
	$('#new_review').submit(function(ele) {
		ele.preventDefault();
        submitReview(this);
	})
}

//append 
function loadReview(review) {
	let addedReview = HandlebarsTemplates['reviews/review'](review);
	$('#clicked-reviews').append(addedReview);
	$('#new_review').remove();
}
