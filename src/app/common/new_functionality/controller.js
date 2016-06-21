'use strict';

angular.module('')
  .controller('', ['',
    function() {
      const self = this;

      /** Call service exp -
        {{ServiceName}}.{{ServiceFunction}}().success(
          (r) => {
            self.{{key}} = r.{{key}};
          };
        ).failure();
      */
    }
  ]
);
