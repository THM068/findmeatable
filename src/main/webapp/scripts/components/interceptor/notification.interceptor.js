 'use strict';

angular.module('findmeatableApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-findmeatableApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-findmeatableApp-params')});
                }
                return response;
            }
        };
    });
