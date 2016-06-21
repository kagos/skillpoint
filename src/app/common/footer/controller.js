'use strict';

angular.module('footer')
  .controller('FooterController', [
    function() {
      const self = this;
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear();

      self.icon = "fa-copyright";
      self.year = currentYear;
    }
  ]
);
