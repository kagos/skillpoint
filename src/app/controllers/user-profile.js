'use strict';

angular.module('userProfile')
  .controller('UserProfileController', ['UserService',
    function(UserService) {
      const self = this;

      UserService.getUserData().success(
        (responseObj) => {
          const r = responseObj.person;
          const pictureUrl = r['pictureURL'].replace(".img",".png");

          self.pictureUrl = 'http://applicant.pointsource.us/' + pictureUrl;
          self.genderClass = r['sex'];
          self.fullName = r['given-name'] + " " + r['last-name'];
          self.houseNumber = r.address['house-number'];
          self.street = r.address['street'];
          self.apartmentNumber = r.address['apartment-number'];
          self.city = r.address['city'];
          self.state = r.address['state'];
          self.zipCode = r.address['zip-code'];
        }
      );
    }
  ]
);
