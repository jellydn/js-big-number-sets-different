# js-big-number-sets-different
Find the different between 2 sets of number. Example input as below:
```
input set: [1­-5],[2­-20]
input negative set: [3­-7]
output: [1­-2],[8­-20] 
­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­ 
input set: [3­-15],[2-­20],[5-­10]
input negative set: [3­-5], [8­-10]
output:[2], [6­-7],[11­-20] 
­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­ 
input set: [1­-7],[5­-20],[25­-100]
input negative set: [6­-9], [8­-11],[30­-50]
output:[1­5], [12­29],[51­100] 
­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­ 
input set: [1­-7],[10­-20],[25­-100]
input negative set: [2­-5], [11­-21],[30­-50]
output:[1], [6­-7],[10],[25­-29],[51­-100]
```
## Feature
create function that have 2 parameters (array of sets) and result is array of set.
Result is first array that remove intersec from second parameter.

## How to run
This project is tested with [Jest](https://facebook.github.io/jest/).
* Open terminal and enter `npm install` or `yarn install`
* `npm run test` or `yarn test` for running test

[![Travis build status](http://img.shields.io/travis/jellydn/js-big-number-sets-different.svg?style=flat)](https://travis-ci.org/jellydn/js-big-number-sets-different)
[![Code Climate](https://codeclimate.com/github/jellydn/js-big-number-sets-different/badges/gpa.svg)](https://codeclimate.com/github/jellydn/js-big-number-sets-different)
[![Test Coverage](https://codeclimate.com/github/jellydn/js-big-number-sets-different/badges/coverage.svg)](https://codeclimate.com/github/jellydn/js-big-number-sets-different)
[![Dependency Status](https://david-dm.org/jellydn/js-big-number-sets-different.svg)](https://david-dm.org/jellydn/js-big-number-sets-different)
[![devDependency Status](https://david-dm.org/jellydn/js-big-number-sets-different/dev-status.svg)](https://david-dm.org/jellydn/js-big-number-sets-different#info=devDependencies)
