(function() {

  Tower.Factory.define('ircBot', function() {
    return {
      name: Tower.random('fullName')
    };
  });

}).call(this);
