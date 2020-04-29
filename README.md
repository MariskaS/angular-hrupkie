# AngularHrupkie

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.0.

## Usage
- [ngx-page-scroll](https://github.com/Nolanus/ngx-page-scroll/blob/master/README.md)
- [ng-svg-icon-sprite](https://github.com/jannicz/ng-svg-icon-sprite)
- [ngx-useful-swiper](https://github.com/jaychase/angular2-useful-swiper)
- [fontawesome](https://fontawesome.com/)
- [storybook](https://storybook.js.org/docs/guides/guide-angular/r)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Using
1. SVG sprite - [svg-icon-sprite](https://github.com/jannicz/svg-icon-sprite)
    - add icon.svg to the ./src/assets/icons
    - npm run generate:sprite
    - html code:
    ```angular2svg
     <svg-icon class="ah-svg--girl"
               src="assets/sprites/sprite.svg#icon-girl"
               width="..."
               height="..."
               viewBox="0 0 580 619"></svg-icon>
    ```
2. Slider - [ngx-useful-swiper](https://github.com/jaychase/angular2-useful-swiper)
