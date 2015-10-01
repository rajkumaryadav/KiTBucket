var app =
    angular.module('app')
        .config(
        [
            '$controllerProvider', '$compileProvider', '$filterProvider', '$provide','$locationProvider'
            function($controllerProvider, $compileProvider, $filterProvider, $provide,$locationProvider) {
                app.controller = $controllerProvider.register;
                app.directive = $compileProvider.directive;
                app.filter = $filterProvider.register;
                app.factory = $provide.factory;
                app.service = $provide.service;
                app.constant = $provide.constant;
                app.value = $provide.value;
				
var h5m = (typeof html5Mode !== 'undefined') ? html5Mode : true;
$locationProvider.html5Mode(h5m);
            }
        ]);

