import angular from 'angular';
import LikeCounter from './controllers/counter';
import FirstCompComponent from './components/firstComp';
import FirstCompController from './components/firstComp.controller';
//console.log("hello_test");

angular
  .module('app', [])
  .controller('LikeCounter', LikeCounter)
  .component('firstCompComponent', FirstCompComponent)
  .controller('firstCompController', FirstCompController)
  // .directive('item', function() {
  //   return {
  //     scope: {
  //       item: '=set',
  //       onClick: '&'
  //     },
  //     replace: true,
  //     controller: function() {},
  //     controllerAs: 'ctrl',
  //     bindToController: true,
  //     restrict: 'EA',
  //     template: '<input type="checkbox" ng-click="ctrl.onClick({item: ctrl.item})" ng-checked="ctrl.item.active" /> '
  //   };
  // })
  // .controller('Controller', ['$scope', function($scope) {
  //   $scope.customer = {
  //     name: 'Naomi',
  //     address: '1600 Amphitheatre'
  //   };
  // }])
  // .directive('myCustomer', function() {
  //   return {
  //     template: 'Name: {{customer.name}} Address: {{customer.address}}'
  //   };
  // });
