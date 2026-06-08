import { resolve } from 'path';
import { defineConfig } from 'vite';

// Vite library-mode build for Calmdown.
//
// Produces the same browser-global artifact as the old webpack build
// (`window.Calmdown`, so `new Calmdown(...)` works from a <script> tag),
// plus a modern ESM entry for bundlers/npm consumers.
//
// Output paths are kept identical to the webpack era so the README, the
// published npm package, and dist/index.html keep working:
//   dist/js/calmdown.min.js   (UMD)
//   dist/js/calmdown.min.mjs  (ESM)
//   dist/css/calmdown.min.css
export default defineConfig({
	css: {
		preprocessorOptions: {
			scss: {
				// Lets SCSS resolve bare `@import "prismjs/themes/..."` from
				// node_modules (replaces webpack's `~` prefix convention).
				loadPaths: ['node_modules'],
			},
		},
	},
	build: {
		// Do NOT wipe dist/ — it also holds the committed demo page
		// (dist/index.html, dist/demo/) that is not produced by this build.
		emptyOutDir: false,
		sourcemap: true,
		lib: {
			entry: resolve(__dirname, 'src/js/Calmdown.js'),
			name: 'Calmdown',
			formats: ['umd', 'es'],
			fileName: (format) =>
				format === 'es' ? 'js/calmdown.min.mjs' : 'js/calmdown.min.js',
		},
		rollupOptions: {
			output: {
				// Route the extracted stylesheet to its historical path.
				assetFileNames: (assetInfo) =>
					assetInfo.name && assetInfo.name.endsWith('.css')
						? 'css/calmdown.min.css'
						: 'assets/[name][extname]',
			},
		},
	},
});