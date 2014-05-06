requirejs.config({
  baseUrl: './',
  paths: {
    jquery: 'bower_components/jquery/dist/jquery',
    myModule: 'assets/javascripts/modules/module'
  }
});

requirejs(['myModule'], function(Mod) {
  var mod = new Mod();
});