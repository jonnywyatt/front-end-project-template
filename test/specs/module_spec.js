describe('adjust target retirement income', function () {

  'use strict';

  before(function (done) {
    var self = this;

    requirejs(
        ['jquery', 'myModule'],
        function ($, Mod) {
          self.$html = $('<div />');
          self.module = new Mod(self.$html);
          done();
        }, done);
  });

  describe('group', function () {
    it('return false if no trigger elements in DOM', function () {
      expect(this.module).to.exist;
    });
  });

});

