app.directive(item, function() {
  return {
    scope: {
      item: '=set',
      onClick: '&'
    },
    replace: true,
    controller: function() {},
    controllerAs: 'ctrl',
    bindToController: true,
    restrict: 'EA',
    template: '<input type="checkbox" ng-click="ctrl.onClick({item: ctrl.item})" ng-checked="ctrl.item.active" /> '
  };
});
