const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
	hamburger.classList.toggle("active");
	navMenu.classList.toggle("active");
}

function closeMenu() {
	hamburger.classList.remove("active");
	navMenu.classList.remove("active");
}

window.onload = function () {
	document.getElementById('newsletter-signup-form').addEventListener('submit', function (event) {
		event.preventDefault();
		// generate a five digit number for the contact_number variable
		this.ident_number.value = Math.random() * 100000 | 0;
		// these IDs from the previous steps
		emailjs.sendForm('service_dssf123', 'template_vywdbyb', this)
			.then(function () {
				console.log('SUCCESS!');
				document.getElementById("newsletter-signup-form").reset();
				document.getElementById("newsletter-signup-form").style.display = "none";
				document.getElementById("newsletter-signup-form-thank-you").style.display = "block";
			}, function (error) {
				console.log('FAILED...', error)
				document.getElementById("newsletter-signup-form-thank-you").style.display = "none";
			});
	});

}

(function() {
               emailjs.init('user_5DbhIUbFrA2loA1fd9IcN');
         })();
