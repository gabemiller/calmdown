# Web development bootstrap

[![GitHub forks](https://img.shields.io/github/forks/gabemiller/web-development-bootstrap.svg)](https://github.com/gabemiller/web-development-bootstrap/network) [![GitHub stars](https://img.shields.io/github/stars/gabemiller/web-development-bootstrap.svg)](https://github.com/gabemiller/web-development-bootstrap/stargazers) [![GitHub issues](https://img.shields.io/github/issues/gabemiller/web-development-bootstrap.svg)](https://github.com/gabemiller/web-development-bootstrap/issues) [![Twitter](https://img.shields.io/twitter/url/https/github.com/gabemiller/web-development-bootstrap.svg?style=social)](https://twitter.com/intent/tweet?text=Worth%20to%20check%3A&url=https%3A%2F%2Fgithub.com%2Fgabemiller%2Fweb-development-bootstrap)

![dependencies](https://img.shields.io/badge/dependencies-up--to--date-brightgreen.svg) ![devDependencies](https://img.shields.io/badge/devDependencies-up--to--date-brightgreen.svg)

I created this small project to start web development a little bit easier. 
This project gives us really useful dependencies and ready-to-work configuration out of the box.

## How to use

1. Download this project:

    ```shell
    git clone https://github.com/gabemiller/web-development-bootstrap.git
    ```
2. (**Required**) If you don't have node.js on your platform, just install it before.
Get it from here: https://nodejs.org/

3. Get the node.js dependencies.
    ```shell
    npm install 
    ```

4. (**Required**) If you don't have bower, just install it with npm.
More info: http://bower.io/
    ```shell
    npm install -g bower
    ```

5. Get the bower dependencies.
    ```shell
    bower install
    ```

6. (**Optional**) Of course, you can add or remove npm and bower dependencies.
    ```shell
    npm install --save-dev [package-name]
    bower install [--save] [package-name]
    ```
7. Create something marvelous & have fun!

## What does it have

### Npm modules

```json
"devDependencies": {
    "babel-core": "^6.17.0",
    "babel-loader": "^6.2.5",
    "babel-preset-es2015": "^6.16.0",
    "babel-preset-stage-2": "^6.17.0",
    "gulp": "^3.9.1",
    "gulp-autoprefixer": "^3.1.1",
    "gulp-clean-css": "^2.0.13",
    "gulp-concat": "^2.6.0",
    "gulp-connect": "^2.3.1",
    "gulp-google-webfonts": "0.0.14",
    "gulp-imagemin": "^3.0.3",
    "gulp-less": "^3.3.0",
    "gulp-modify-css-urls": "^0.2.2",
    "gulp-prettify": "^0.4.0",
    "gulp-pug": "^3.1.0",
    "gulp-rename": "^1.2.2",
    "gulp-rimraf": "^0.2.0",
    "gulp-sass": "^2.3.2",
    "gulp-sourcemaps": "^2.1.1",
    "gulp-uglify": "^1.5.4",
    "gulp-util": "^3.0.7",
    "webpack": "^1.13.2",
    "webpack-dev-server": "^1.16.2",
    "webpack-stream": "^3.2.0"
  }
```

### Bower components
```json
"dependencies": {
    "bootstrap-js-components": "^3.3.4",
    "angular": "^1.5.8",
    "bootstrap-sass": "^3.3.7",
    "jquery": "^3.1.1",
    "bootstrap": "^3.3.7"
}
```

## Learn more

If you do not know one of these. Here you can learn more about them:

- [Babel](https://babeljs.io/)
- [Gulp](http://gulpjs.com/)
- [Sass](http://sass-lang.com/)
- [Pug](https://pugjs.org)
- [Google Fonts](https://fonts.google.com/)
- [Webpack](https://webpack.github.io/)
