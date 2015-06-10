# jstransformer-lodash

[Lodash Template](https://lodash.com/docs#template) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-lodash/master.svg)](https://travis-ci.org/jstransformers/jstransformer-lodash)
[![Coverage Status](https://img.shields.io/coveralls/jstransformers/jstransformer-lodash/master.svg)](https://coveralls.io/r/jstransformers/jstransformer-lodash?branch=master)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-lodash/master.svg)](http://david-dm.org/jstransformers/jstransformer-lodash)
[![NPM version](https://img.shields.io/npm/v/jstransformer-lodash.svg)](https://www.npmjs.org/package/jstransformer-lodash)

## Installation

    npm install jstransformer-lodash

## API

```js
var lodash = require('jstransformer')(require('jstransformer-lodash'));
var opts = {};

lodash.render('<h1>Hello <%= place %>!</h1>', opts, {place: 'world'}).body;
//=> '<h1>Hello world!</h1>'


var promise = lodash.renderFileAsync('./path/to/hello.lodash', {}, {place: 'world'});
promise.then(function(data) {
  console.log(data.body);
  //=> '<h1>Hello world!</h1>'
});
```

## License

MIT
