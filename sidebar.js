///Automatic opening and closing sidebar

var mini = true;
var media = window.matchMedia('(max-width: 600px)');

function toggleOver() {
	if (mini) {
		console.log('opening sidebar');

		if (media.matches) {
			document.getElementById('aSidebar').style.width = '180px';
			document.getElementById('aSidebar').style.opacity = '1';
			document.getElementById('main').style.marginLeft = '180px';
				this.mini = false;
		}

		else {
			document.getElementById('aSidebar').style.width = '280px';
			document.getElementById('aSidebar').style.opacity = '1';
			document.getElementById('main').style.marginLeft = '280px';
				this.mini = false;
		}
	}
};

function toggleOut() {
	if (mini) {
		console.log("closing sidebar");

		if (media.matches) {
			document.getElementById("aSidebar").style.width = "5%";
			document.getElementById("aSidebar").style.opacity = "1";
			document.getElementById("main").style.marginLeft = "5%";
				this.mini = true;
		}
		else {
			document.getElementById("aSidebar").style.width = "2%";
			document.getElementById("aSidebar").style.opacity = "0.3";
			document.getElementById("main").style.marginLeft = "2%";
				this.mini = true;
		}
	}
};

///Scroll button to top

var topbutton = document.getElementById("topbtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	if (document.body.scrollTop > 20 ||
		document.documentElement.scrollTop > 20) {
			topbutton.style.display = "block";
		}

	else {
		topbutton.style.display = "none";
	}
}

function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
};
