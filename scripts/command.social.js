// Generated by CoffeeScript 1.6.3
(function() {
  var BooCommand, _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  BooCommand = (function(_super) {
    __extends(BooCommand, _super);

    function BooCommand() {
      _ref = BooCommand.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    BooCommand.prototype.execute = function() {
      return window.DoubanFM.boo();
    };

    return BooCommand;

  })(window.CommandBase);

  (new BooCommand("boo", "Boo a song. Skip and never play again (need login)")).register();

}).call(this);

/*
//@ sourceMappingURL=command.social.map
*/
