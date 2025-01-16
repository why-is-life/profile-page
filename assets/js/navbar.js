const navbar = document.querySelector('.navbar');
const threshold = 100;

window.addEventListener('scroll', function () {
	const scrollPosition = window.pageYOffset;
	if (scrollPosition > threshold) {
		navbar.classList.add('hidden');
	} else {
		navbar.classList.remove('hidden');
	}
});