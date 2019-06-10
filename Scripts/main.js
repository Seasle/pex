const links = document.querySelectorAll('.header__link');

for (let link of links) {
	link.addEventListener('click', (event) => {
		for (let link of links) {
			link.classList.remove('header__link--active');
		}
		link.classList.add('header__link--active');
	});
}

const pageUp = document.querySelector('.page-up');

pageUp.addEventListener('click', (evnet) => {
	event.preventDefault();

	scrollTo({
		top: 0,
		left: 0,
		behavior: 'smooth'
	});
});

window.addEventListener('scroll', (event) => {
	if (document.documentElement.scrollTop > innerHeight) {
		pageUp.classList.add('page-up--visible');
	} else {
		pageUp.classList.remove('page-up--visible');
	}
});