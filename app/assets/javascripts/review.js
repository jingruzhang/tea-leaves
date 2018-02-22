//document ready and addlistener

//class Review
class Review {
	constructor(review_params) {
		this.id = review_params.id;
		this.content = review_params.content;
		this.tea = review_params.tea;
		this.user = review_params.user;
	}
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
			console.log(response);
			buildReview(response);
		}
	})
}

//build review
function buildReview(review_params) {
	let review = new Review(review_params)
	debugger;
}

//submit form
function submitFormListener() {
	$('#new_review').submit(function(ele) {
		ele.preventDefault();
        submitReview(this);
	})
}

//append 