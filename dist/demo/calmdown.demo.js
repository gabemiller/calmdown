const body = document.querySelector('body');
const calmdown = document.querySelector('.calmdown');
const btn = document.querySelector('.btn-dark-theme');

btn.addEventListener('click', function (e) {
	e.preventDefault();
	if(body.classList.contains('dark')){
		body.classList.remove('dark');
		calmdown.classList.remove('cd-theme-dark');
		calmdown.classList.add('cd-theme-default');
		this.textContent = 'dark theme';
		this.classList.remove('btn-light-theme');
		this.classList.add('btn-dark-theme');
	} else {
		body.classList.add('dark');
		calmdown.classList.remove('cd-theme-default');
		calmdown.classList.add('cd-theme-dark');
		this.textContent = 'light theme';
		this.classList.remove('btn-dark-theme');
		this.classList.add('btn-light-theme');
	}
});
