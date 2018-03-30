# StockTicker

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.3.

##This project hosts on [Firebase](https://clalit-like-login.firebaseapp.com/login) platform.

Navigate to `https://clalit-like-login.firebaseapp.com/` 
or
 `https://clalit-like-login.firebaseapp.com/login` in order to see an app
### Current build status 
Every git push triggers Travis CI to re-build whole app, and current status is:

[![Build Status](https://travis-ci.org/dlevkov/StockTicker.svg?branch=master)](https://travis-ci.org/dlevkov/StockTicker)

## Publishing process
any push on master branch triggers CI run, then CI builds prod version and if build was success, deploys to Firebase hosting automatically

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
