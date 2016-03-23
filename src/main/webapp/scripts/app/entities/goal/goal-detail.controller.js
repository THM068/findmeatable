'use strict';

angular.module('findmeatableApp')
    .controller('GoalDetailController', function ($scope, $rootScope, $stateParams, entity, Goal, User) {
        $scope.goal = entity;
        $scope.load = function (id) {
            Goal.get({id: id}, function(result) {
                $scope.goal = result;
            });
        };
        var unsubscribe = $rootScope.$on('findmeatableApp:goalUpdate', function(event, result) {
            $scope.goal = result;
        });
        $scope.$on('$destroy', unsubscribe);

    });
