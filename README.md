# calmdown

Calmdown is a lightweight markdown editor based 
on showdown js with a bite of github flavor.

## How it works

1. **(Important)** You should use some css normalization 
or reset before use Calmdown. In the demo project I used normalize.css.
1. Add this stylesheet link to head of the html. You can find this in dist/css folder.

    ```html
    <link href="[your_path_to_css]/css/calmdown.min.css" rel="stylesheet" type="text/css">
    ```
1. Add this script to the bottom of the html before close body tag. You can find this in dist/scripts folder.
    
    ```html
    <script src="[your_path_to_js]/js/calmdown.min.js"></script>
    ```
1. Create a div with classname .calmdown whereever you want
   
   ```html
    <div class="calmdown"></div> 
   ```
1. Initialize a new instance of the Calmdown under the calmdown.min.js script tag
   
   ```html
    <script>
       var cd = new Calmdown({
    	    // optional configuration
       });
    </script>
   ```
   
## Version history

- **0.5.0v**
    + Refactoring and optimalization
    + Add view key combination events
- **0.4.0v**
    + Add Mousetrap js
    + Add insert key combination events
- **0.3.0v**
    + Remove HighlightJs
    + Add PrismJs
- **0.2.0v**
    + Add HighlightJs
- **0.1.0v**
    + Add showdown js
    + Default layout
    + Conversion and copy events

## License
    
The MIT license (MIT)

## I would like to thank these projects

- [Showdown](https://github.com/showdownjs/showdown)
- [Mousetrap](https://github.com/ccampbell/mousetrap)
- [PrismJs](https://github.com/PrismJS/prism)
- [Normalize css](https://github.com/necolas/normalize.css/)