Array.from($('.tea')).forEach(ele => ele.addEventListener("click", function(elem) { 
	elem.preventDefault();
	alert("you clicked me");
}))