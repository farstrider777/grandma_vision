import angular from 'angular';
import LikeCounter from './controllers/counter';


angular
  .module('app', [])
  .controller('LikeCounter', LikeCounter)
