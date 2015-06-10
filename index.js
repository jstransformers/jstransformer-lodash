'use strict';

var lodash = {
  template: require('lodash.template'),
  mixin: require('lodash.mixin'),
  assign: require('lodash.assign'),
  omit: require('lodash.omit')
};

exports.name = 'lodash';
exports.inputFormats = ['lodash', 'html'];
exports.outputFormat = 'html';

exports.compile = function _compile(str, options) {
  if (options.mixins) {
    Object.keys(options.mixins).forEach(function(key) {
      var value = options.mixins[key];
      var mixin = {};
      mixin[key] = value;

      lodash.mixin(mixin);
    })
  }
  options = lodash.omit(options, ['mixins']);
  var compile = lodash.template(str, options);
  var context = lodash.omit(options, ['imports']);

  return function(locals) {
    context = lodash.assign(context, locals);
    return compile(context);
  };
};
