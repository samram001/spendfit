# Spendfit

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.1.4.

## JSON server

Run `json-server --watch mockdata/data.json` for a json server. Navigate to `http://localhost:3000/`. Check json serer running or not and check no of collections(api) used. 

## Development and JSON server

Run `concurrently --kill-others \"npm run mock:server\" \"npm run start\"` for a dev server and json server. The two server started in one command.

cmd - npm run mock:server

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

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
