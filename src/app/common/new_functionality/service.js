'use strict';

angular.module('{{moduleName}}')
  .factory('{{FactoryName}}', ['$http',
    function getUserData($http) {
      const {{functionName}} = function() {
        return $http.get('{{getURL}}');
      };

      return {
        {{functionName}}: {{functionName}}
      }
    }
  ]
);
