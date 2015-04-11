/**
 * jstransformer-toffee <https://github.com/jstransformers/jstransformer-toffee>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var test = require('assertit');
var transformer = require('jstransformer');
var transform = transformer(require('../index'));

var lodash = require('lodash');

var opts = {
  place: 'world',
  name: 'charlike mike reagent',
  imports: {
    sentencecase: function sentencecase(str) {
      if (str.length === 1) {return str.toUpperCase(); }
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
  },
  mixins: {
    charlikecase: function charlikeCase(str) {
      return str.toUpperCase();
    }
  }
};
var template = 'Hello <%= place %>! <%= sentencecase(name) %>, u r my <%= _.charlikecase("master") %>!! at <%= date %>';
var compile = transform.compile(template, opts);
var locals = {date: new Date()};

// console.log(compile.fn(locals))
// console.log(transform.render(template, opts, locals).body)
