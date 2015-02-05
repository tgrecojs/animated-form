var formApp = angular.module('formApp', ['ngAnimate', 'ngMessages', 'ui.router'])


formApp.config(function($stateProvider, $urlRouterProvider) {
    
    $stateProvider



        // route to show our basic form (/form)
        .state('form', {
            url: '/form',
            templateUrl: 'partials/form.html',
            controller: 'formController'
        })
        
        // nested states 
        // each of these sections will have their own view
        // url will be nested (/form/profile)
        .state('form.profile', {
            url: '/profile',
            templateUrl: 'partials/form-profile.html'
        })
        
        // url will be /form/welcome
        .state('form.interests', {
            url: '/interests',
            templateUrl: 'partials/form-interests.html'
        })
        
        // url will be /form/payment
        .state('form.payment', {
            url: '/payment',
            templateUrl: 'partials/form-payment.html'
        })

        .state('home', {
            url: '/home',
            templateUrl: 'partials/home.html'
        })

        .state('home.welcome', {
            url: '/welcome',
            templateUrl: 'partials/home-welcome.html'
        })
        
        .state('home.bio', {
            url: '/bio',
            templateUrl: 'partials/home-bio.html'
        })
        
        .state('home.angular', {
            url: '/angular',
            templateUrl: 'partials/home-angular.html'
        });


    $urlRouterProvider.otherwise('/home/welcome');

});
       
    // catch all route
    // send users to the form page 
 
// our controller for the form
// =============================================================================
formApp.controller('formController', function($scope) {
    
    // we will store all of our form data in this object
    $scope.formData = {};
    
    // function to process the form
    $scope.processForm = function() {
        alert('Thank you for your form submission!');  
    };
    
});







