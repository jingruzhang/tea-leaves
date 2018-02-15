class Type {
	constructor(type_params) {
		this.id = type_params.id;
		this.name = type_params.name;
		this.about = type_params.about;
		this.instruction = type_params.instruction;
		this.teas = type_params.teas;
	}
}

function getCurrentTypeId() {
	var path =  window.location.pathname.split('/');
	return parseInt(path[path.length - 1]);
}

//next type listener
function nextTypeListener() {
    $('#js-next-type').click(function(ele) {
    	ele.preventDefault();
    	let id = getCurrentTypeId();
    	let next_id = null;
    	$.getJSON('/types', function(data) {
			$.each(data, function( key, val ) { 
				if (val.id === id) {
					next_id = data[key + 1].id;
				}
			})
			loadType(next_id);
		})
    })

}

//previous type listener
function previousTypeListener() {
    $('#js-previous-type').click(function(ele) {
    	ele.preventDefault();
    	let id = getCurrentTypeId();
    	let previous_id = null;
    	$.getJSON('/types', function(data) {
			$.each(data, function( key, val ) { 
				if (val.id === id) {
					previous_id = data[key - 1].id;
				}
			})	
    		loadType(previous_id);
    	})
    })
}


//load type
function loadType (new_id) {
	$.getJSON('/types', function(data) {
		$.getJSON('/types/' + new_id).done(function(data) {
			let next_type = new Type(data);
			let next_type_show = $(HandlebarsTemplates['types/show-type'](next_type));
			let next_type_tea = $(HandlebarsTemplates['types/show-type-tea'](next_type));
			$('#clicked-tea').empty();
			$('#js-type').html(next_type_show);
			$('#js-type-tea').html(next_type_tea);
			history.pushState(null, null, '/types/' + next_type.id)
		})
	})
}