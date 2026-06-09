// Dev-server demo entry. Imports Calmdown straight from source so the Vite
// dev server gives HMR over the actual library code. The built artifact in
// dist/ is produced separately by `npm run build`.
import Calmdown from '../src/ts/main';

new Calmdown({
	width: '1280px',
	height: '768px',
});

// Dark/light theme toggle (mirrors dist/demo/calmdown.demo.js).
const calmdown = document.querySelector<HTMLElement>('.calmdown');
const btn = document.querySelector<HTMLButtonElement>('.btn-dark-theme');

if (calmdown && btn) {
	btn.addEventListener('click', (e) => {
		e.preventDefault();
		if (document.body.classList.contains('dark')) {
			document.body.classList.remove('dark');
			calmdown.classList.remove('cd-theme-dark');
			calmdown.classList.add('cd-theme-default');
			btn.textContent = 'dark theme';
			btn.classList.remove('btn-light-theme');
			btn.classList.add('btn-dark-theme');
		} else {
			document.body.classList.add('dark');
			calmdown.classList.remove('cd-theme-default');
			calmdown.classList.add('cd-theme-dark');
			btn.textContent = 'light theme';
			btn.classList.remove('btn-dark-theme');
			btn.classList.add('btn-light-theme');
		}
	});
}