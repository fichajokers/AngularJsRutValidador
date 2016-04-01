'use strict';

describe('', function() {

  var module;
  var dependencies;
  dependencies = [];

  var hasModule = function(module) {
  return dependencies.indexOf(module) >= 0;
  };

  beforeEach(function() {

  // Get module
  module = angular.module('pluginRutAngularJs');
  dependencies = module.requires;
  });

  it('should load config module', function() {
    expect(hasModule('pluginRutAngularJs.config')).to.be.ok;
  });

  

  
  it('should load directives module', function() {
    expect(hasModule('pluginRutAngularJs.directives')).to.be.ok;
  });
  

  
  it('should load services module', function() {
    expect(hasModule('pluginRutAngularJs.services')).to.be.ok;
  });
  

});