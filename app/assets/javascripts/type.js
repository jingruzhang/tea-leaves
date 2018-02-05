$(function() {
	nextTypeListener(); 
	previousTypeListener()
})

function getCurrentTypeId() {
	var path =  window.location.pathname.split('/');
	return parseInt(path[path.length - 1]);
}

//next type listener
function nextTypeListener() {
    $('#js-next-type').click(function(ele) {
    	ele.preventDefault();
    	var id = getCurrentTypeId();
    	var next_id = null;
    	$.getJSON('/types', function(data) {
    		$.each(data, function( key, val ) { 
    			if (val.id === id) {
    				next_id = data[key + 1].id;
    			}
    		})
    		$.getJSON('/types/' + next_id).success()
    	})
    })

}

//previous type listener
function previousTypeListener() {}