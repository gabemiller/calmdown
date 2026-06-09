# Calmdown

![npm](https://img.shields.io/badge/npm-1.0.0-blue.svg?style=flat-square) [![GitHub issues](https://img.shields.io/github/issues/gabemiller/calmdown.svg?style=flat-square)](https://github.com/gabemiller/calmdown/issues) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://raw.githubusercontent.com/gabemiller/calmdown/master/LICENSE.md) [![Twitter](https://img.shields.io/twitter/url/https/github.com/gabemiller/calmdown.svg?style=social)](https://twitter.com/intent/tweet?text=Check%20out%20Calmdown%2C%20an%20awesome%2C%20lightweight%20markdown%20editor&url=https%3A%2F%2Fgithub.com%2Fgabemiller%2Fcalmdown)

Calmdown is a lightweight markdown editor based on marked with a bite of github flavor.

## Quick start

- Clone the repo
  
  ```shell
  git clone https://github.com/gabemiller/calmdown.git
  ```
- Install using [npm](https://www.npmjs.com/)
  
  ```shell
  npm install calmdown --save
  ```

## How it works

1. **(Important)** You should use some css normalization 
or reset before use Calmdown. In the demo project I used normalize.css.
1. Add this stylesheet link to head of the html. You can find this in dist/css folder.

    ```html
    <link href="dist/css/calmdown.min.css" rel="stylesheet" type="text/css">
    ```
1. Add this script to the bottom of the html before close body tag. You can find this in dist/scripts folder.
    
    ```html
    <script src="dist/scripts/calmdown.min.js"></script>
    ```
1. Create a div with classname .calmdown whereever you want
   
   ```html
    <div class="calmdown"></div> 
   ```
1. Initialize a new instance of the Calmdown under the calmdown.min.js script tag
   
   ```html
    <script>
       const cd = new Calmdown({
        // optional configuration
       });
    </script>
   ```

## Theming

Calmdown's appearance is driven by CSS custom properties, so you can re-theme it
from your own stylesheet — no build step required. Override any of these on the
`.calmdown` element (or `:root`):

```css
.calmdown {
  --cd-bg: #0b1021;            /* editor / preview / dialog background */
  --cd-text: #e6e6e6;          /* editor / preview text */
  --cd-border: #2a2a40;        /* borders */
  --cd-toolbar-bg: #11162a;    /* toolbar background */
  --cd-help-button-bg: #1a2036;/* help dialog button background */
  --cd-resize-bg: #11162a;     /* resize handle bar background */
  --cd-resize-border: #0b1021; /* resize handle top border */
  --cd-resize-handle: #2a2a40; /* resize grip lines */
}
```

A bundled **dark** theme is available as a class — toggle `cd-theme-dark` on the
`.calmdown` element. Defining your own named theme is just a class that sets the
same variables.

**Code highlighting** uses [highlight.js](https://github.com/highlightjs/highlight.js).
The `github` theme is bundled by default; to use a different one, import another
highlight.js theme stylesheet in your page (it styles the `.hljs` classes), e.g.

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/highlight.js/styles/atom-one-dark.css">
```

## Development

Calmdown is built with [Vite](https://vitejs.dev) (library mode) and written in TypeScript.

```shell
npm install        # install dependencies (also installs the git hooks)
npm run dev        # start the Vite dev server with HMR
npm run build      # build the library + type declarations into dist/
npm run typecheck  # type-check with tsc
npm run check      # lint + format check with Biome
npm run check:fix  # auto-fix lint + formatting
```

Tooling:

- **[Biome](https://biomejs.dev)** handles linting and formatting (`biome.json`).
- A **pre-commit** hook runs `biome check` on staged files.
- Commit messages must follow **[Conventional Commits](https://www.conventionalcommits.org)** — enforced by a `commit-msg` hook via [commitlint](https://commitlint.js.org).

## Contribute

First things first, thank all of you who spend your time to check out Calmdown. If you find a _problem_ or have
an **idea** to make Calmdown better, just [open a descriptive issue about it.](https://github.com/gabemiller/calmdown/issues/new)

Moreover, pull requests are welcome too, just be sure to avoid unrelated commits.

Your contributions are truly appriciated! 
  
## Version history

[Version history](https://github.com/gabemiller/calmdown/blob/master/VERSION.md)

## License
    
[MIT license](https://github.com/gabemiller/calmdown/blob/master/LICENSE.md)

## I would like to thank authors and contributors of these projects

- [marked](https://github.com/markedjs/marked)
- [highlight.js](https://github.com/highlightjs/highlight.js)
- [Normalize css](https://github.com/necolas/normalize.css/)
