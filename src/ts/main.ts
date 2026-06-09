// Library build entry. Pulls in the stylesheet (so Vite emits the CSS
// bundle) and re-exports the public API. Kept separate from Calmdown.ts so
// the shipped type declarations stay free of the `.scss` side-effect import.
import '../scss/calmdown.scss';
import Calmdown from './Calmdown';

export default Calmdown;
export type { CalmdownSettings } from './Config';