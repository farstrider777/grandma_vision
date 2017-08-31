import angular from 'angular';
import LikeCounter from './controllers/counter';
console.log("hello_test");

angular
  .module('app', [])
  .controller('LikeCounter', LikeCounter)
