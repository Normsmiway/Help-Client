'use strict';
/** 
  * controller for User Profile Example
*/
app.controller('UserCtrl', ["$scope", "flowFactory", function ($scope, flowFactory) {
    $scope.removeImage = function () {
        $scope.noImage = true;
    };
    $scope.obj = new Flow();

    $scope.userInfo = {
        firstName: 'Norms',
        lastName: 'Hardey',
        url: 'www.normsmiway.com',
        email: 'tajudeen@normsmiway.com',
        phone: '(805)-753-0333',
        gender: 'male',
        zipCode: '234',
        city: 'Lagos (IK)',
        avatar: 'assets/images/avatar-1-xl.jpg',
        twitter: 'a_adenekan',
        github: 'Norms16',
        facebook: 'tnorms1',
        linkedin: 'Adenekan Tajudeen Adeleke',
        google: 'Adenekan Tajudeen',
        skype: 'normsmiway'
    };
    if ($scope.userInfo.avatar == '') {
        $scope.noImage = true;
    }
}]);