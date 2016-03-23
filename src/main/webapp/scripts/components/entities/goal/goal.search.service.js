'use strict';

angular.module('findmeatableApp')
    .factory('GoalSearch', function ($resource) {
        return $resource('api/_search/goals/:query', {}, {
            'query': { method: 'GET', isArray: true}
        });
    });
