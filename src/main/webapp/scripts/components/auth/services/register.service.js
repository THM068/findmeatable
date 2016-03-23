'use strict';

angular.module('findmeatableApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


