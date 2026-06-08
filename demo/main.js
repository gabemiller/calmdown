// Dev-server demo entry. Imports Calmdown straight from source so the Vite
// dev server gives HMR over the actual library code. The built artifact in
// dist/ is produced separately by `npm run build`.
import Calmdown from '../src/js/Calmdown.js';

new Calmdown({
	width: '1280px',
	height: '768px',
	codeHighlightStyle: 'cd-highlight-tomorrow',
});

// Dark/light theme toggle (mirrors dist/demo/calmdown.demo.js).
const body = document.querySelector('body');
const calmdown = document.querySelector('.calmdown');
const btn = document.querySelector('.btn-dark-theme');

btn.addEventListener('click', function (e) {
	e.preventDefault();
	if (body.classList.contains('dark')) {
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