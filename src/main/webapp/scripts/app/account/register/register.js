'use strict';

angular.module('findmeatableApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('register', {
                parent: 'account',
                url: '/register',
                data: {
                    authorities: [],
                    pageTitle: 'Registration'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/account/register/register.html',
                        controller: 'RegisterController'
                    }
                },
                resolve: {
                    
                }
            });
    });
