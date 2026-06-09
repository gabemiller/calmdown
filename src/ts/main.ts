// Library build entry. Pulls in the stylesheets (so Vite emits the CSS
// bundle) and re-exports the public API. Kept separate from Calmdown.ts so
// the shipped type declarations stay free of the CSS side-effect imports.
//
// The bundled default code theme is highlight.js's `github`. Consumers can
// swap it by importing a different highlight.js theme in their own setup.
import 'highlight.js/styles/github.css';
import '../css/calmdown.css';
import Calmdown from './Calmdown';

export default Calmdown;
export type { CalmdownSettings } from './Config';
