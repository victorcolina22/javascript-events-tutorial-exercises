window.onload = function loadFn() {
	var containerElm = document.getElementById("container");
	containerElm.addEventListener("click", function(event) {
		//you code here
		if(event.target) {
			alert(event.target.id);
		}
	});
};
