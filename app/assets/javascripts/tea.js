
class Tea {
	constructor(tea_params) {
		this.id = tea_params.id;
		this.name = tea_params.name;
		this.origin = tea_params.origin;
		this.profile = tea_params.profile;
		this.instruction = tea_params.instruction;
		this.typeId = tea_params.type_id;
		this.reviews = tea_params.reviews;
		this.currentUser = tea_params.current_user;
	}
}


//Listener function for click
function teaClickListener() {
	//dynamically adding eventlisteners to .tea without page reload
	$(document).on("click", ".tea", function(event) {
		event.preventDefault();
		let uri = event.currentTarget.href;
		loadAjax(uri);
	})
}

//load ajax
function loadAjax(uri) {
	$.getJSON(uri, function(data) {
		currentTea = new Tea(data);
		let clickedTea = HandlebarsTemplates['teas/index'](currentTea);
		$('#clicked-tea').html(clickedTea);
		viewReviewsListener();
	})
}