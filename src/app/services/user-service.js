'use strict';

angular.module('userProfile')
  .factory('UserService', ['$http',
    function getUserData($http) {
      const getUserData = function() {
        return $http.get('http://applicant.pointsource.us/api/testUser/575ec751f62a2d8f3c05d7c6');
      };

      return {
        getUserData: getUserData
      }
    }
  ]
);
