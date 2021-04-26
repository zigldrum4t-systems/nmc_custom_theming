window.onload = function () {
	window.onscroll = function () {
		console.log("Calling this function");
		loadFunction();
	}
}

function loadFunction() {
	debugger;
	console.log('body scrolling...');
	if (window.innerWidth <= 1024) {
		setTimeout(function () {
			document.getElementsByClassName("brandbar")[0].style.height = "5px";
			document.getElementsByClassName("brandbar")[0].style.position = "fixed";
			document.getElementsByClassName("container-fixed")[0].style.display = "none";
		}, 3000)
	} else {
		window.onscroll = function () { myFunction() };
	}
}

function myFunction() {
	debugger;
	if (document.documentElement.scrollTop > 80) {
		document.getElementsByClassName("brandbar")[0].style.height = "5px";
		document.getElementsByClassName("brandbar")[0].style.position = "fixed";
		document.getElementsByClassName("container-fixed")[0].style.display = "none";
	}
	else if (document.documentElement.scrollTop < 80) {
		document.getElementsByClassName("brandbar")[0].style.height = "auto";
		document.getElementsByClassName("brandbar")[0].style.position = "static";
		document.getElementsByClassName("container-fixed")[0].style.display = "block";
	}
}