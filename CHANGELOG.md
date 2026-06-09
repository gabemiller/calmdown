# 1.0.0
- Migrate build tooling from Webpack to Vite (library mode, UMD + ESM output)
- Replace Showdown with marked for markdown rendering
- Replace PrismJS with highlight.js for syntax highlighting (github theme bundled by default)
- Replace Mousetrap with a dependency-free native keyboard handler
- Rewrite the source in TypeScript (strict) and ship type declarations
- Replace SCSS with plain CSS; theme via `--cd-*` CSS custom properties
- Add Biome for linting and formatting (replaces the legacy ESLint config)
- Add Husky git hooks: Biome check on pre-commit, commitlint (Conventional Commits) on commit-msg
- **Breaking:** the package is now ESM (`type: module`); a UMD build is provided for `<script>` use
- **Breaking:** remove the `codeHighlightStyle` option — load a highlight.js theme stylesheet to change code colors
# 0.6.2
- Fix syntax highlighter not rendering code exception
- Fix dependency versions
# 0.6.1
- Fix highlight and background bugs
# 0.6.0
- Implement help dialog (#3)
- Refactoring
# 0.5.10
- Add dark text color for default theme (#16)
# 0.5.9
- Add editor text color to support dark themes (#12)
- Add a guide to the test page
# 0.5.8
- Allow setting content from HTML, not only from JS (#13)
# 0.5.7
- Fix resize bar not working properly (#11)
# 0.5.6
- Add Webpack 2 support (#7)
# 0.5.5
- Add non-minified versions of js and css
# 0.5.4
- Add PrismJS syntax highlight themes
# 0.5.3
- Fix firefox scrollbar issue
# 0.5.2
- Add airbnb js style guide
# 0.5.1
- Add documentation
# 0.5.0
- Refactoring and optimization
- Add view key combination events
# 0.4.0
- Add Mousetrap js
- Add insert key combination events
# 0.3.0
- Remove HighlightJs
- Add PrismJs
# 0.2.0
- Add HighlightJs
# 0.1.0
- Add showdown js
- Default layout
- Conversion and copy events
