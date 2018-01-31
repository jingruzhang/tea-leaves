Array.from($('.tea')).forEach(function(ele){ 
	var uri = $(ele).attr('href');
	ele.addEventListener("click", function(elem) { 
		elem.preventDefault();
		$.get(uri, function() {
			alert("you got there!")}
		)}
	)
})