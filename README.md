# Calmdown

![npm](https://img.shields.io/badge/npm-0.5.3-blue.svg?style=flat-square) [![GitHub issues](https://img.shields.io/github/issues/gabemiller/calmdown.svg?style=flat-square)](https://github.com/gabemiller/calmdown/issues) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://raw.githubusercontent.com/gabemiller/calmdown/master/LICENSE.md) [![Twitter](https://img.shields.io/twitter/url/https/github.com/gabemiller/calmdown.svg?style=social)](https://twitter.com/intent/tweet?text=Check%20out%20Calmdown%2C%20an%20awesome%2C%20lightweight%20markdown%20editor&url=https%3A%2F%2Fgithub.com%2Fgabemiller%2Fcalmdown)

Calmdown is a lightweight markdown editor based on showdown js with a bite of github flavor.

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

## Contribute

First things first, thank all of you who spend your time to check out Calmdown. If you find a _problem_ or have
an **idea** to make Calmdown better, just [open a descriptive issue about it.](https://github.com/gabemiller/calmdown/issues/new)

Morover, pull requests are welcome too, just be sure to avoid unrelated commits.

Your contributions are truly appriciated! 
  
## Version history

- **0.5.3**
    + Fix firefox scrollbar issue
- **0.5.2**
    + Add airbnb js style guide
- **0.5.1**
    + Add documentation
- **0.5.0**
    + Refactoring and optimalization
    + Add view key combination events
- **0.4.0**
    + Add Mousetrap js
    + Add insert key combination events
- **0.3.0**
    + Remove HighlightJs
    + Add PrismJs
- **0.2.0**
    + Add HighlightJs
- **0.1.0**
    + Add showdown js
    + Default layout
    + Conversion and copy events

## License
    
[MIT license](https://github.com/gabemiller/calmdown/blob/master/LICENSE.md)

## I would like to thank authors and contributors of these projects

- [Showdown](https://github.com/showdownjs/showdown)
- [Mousetrap](https://github.com/ccampbell/mousetrap)
- [PrismJs](https://github.com/PrismJS/prism)
- [Normalize css](https://github.com/necolas/normalize.css/)
