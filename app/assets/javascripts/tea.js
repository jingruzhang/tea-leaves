$(function() {
	teaClickListener();
})

class Tea {
	constructor(tea_params) {
		this.id = tea_params.id;
		this.name = tea_params.name;
		this.origin = tea_params.origin;
		this.profile = tea_params.profile;
		this.instruction = tea_params.instruction;
		this.type_id = tea_params.type_id;
		this.reviews = tea_params.reviews;
	}
}

//Listener function for click
function teaClickListener() {
	Array.from($('.tea')).forEach(function(ele){ 
		var uri = $(ele).attr('href');
		ele.addEventListener("click", function(elem) { 
			elem.preventDefault();
			loadAjax(uri);
		})
	})
}

//load ajax
function loadAjax(uri) {
	$.getJSON(uri, function(data) {
		let clicked_tea = HandlebarsTemplates['teas/index'](new Tea(data));
		$('#clicked-tea').html(clicked_tea)
	})
}