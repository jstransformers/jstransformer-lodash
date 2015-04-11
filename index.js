/**
 * jstransformer-toffee <https://github.com/jstransformers/jstransformer-toffee>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var fs = require('fs');
var path = require('path');
var lodash = require('lodash');

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
exports.render = function _render(str, options, locals) {
  var compile = exports.compile(str, options);
  return compile(locals);
}
