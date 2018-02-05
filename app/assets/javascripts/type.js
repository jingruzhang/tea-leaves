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
    	$.getJSON('/types', function(data) {
    		
    	})
    })
}

//previous type listener
function previousTypeListener() {}