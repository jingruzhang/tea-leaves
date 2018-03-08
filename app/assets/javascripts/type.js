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
	let path =  window.location.pathname.split('/');
	return parseInt(path[path.length - 1]);
}

//next type listener
function nextTypeListener() {
    $('#js-next-type').on("click", function(ele) {
    	ele.preventDefault();
    	let id = getCurrentTypeId();
    	let nextId = null;
    	$.getJSON('/types', function(data) {
			$.each(data, function( key, val ) { 
				if (val.id === id) {
					nextId = data[key + 1].id;
				}
			})
			loadType(nextId);
		})
    })
}

//previous type listener
function previousTypeListener() {
    $('#js-previous-type').on("click", function(ele) {
    	ele.preventDefault();
    	let id = getCurrentTypeId();
    	let previousId = null;
    	$.getJSON('/types', function(data) {
			$.each(data, function( key, val ) { 
				if (val.id === id) {
					previousId = data[key - 1].id;
				}
			})	
    		loadType(previousId);
    	})
    })
}


//load type
function loadType (newId) {
	$.getJSON('/types', function(data) {
		$.getJSON('/types/' + newId).done(function(data) {
			let nextType = new Type(data);
			nextType.teas.sort(function(teaA, teaB) {
				let nameA = teaA.name.toUpperCase();
				let nameB = teaB.name.toUpperCase();
				if (nameA < nameB) {
					return -1;
				} if (nameA > nameB) {
					return 1;
				} else {
					return 0;
				}
			})
			let nextTypeShow = $(HandlebarsTemplates['types/show-type'](nextType));
			let nextTypeTea = $(HandlebarsTemplates['types/show-type-tea'](nextType));
			$('#clicked-tea').empty();
			$('#js-type').html(nextTypeShow);
			$('#js-type-tea').html(nextTypeTea);
			history.pushState(null, null, '/types/' + nextType.id)
		})
	})
}