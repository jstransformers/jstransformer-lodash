# jstransformer-lodash

[Lodash Template](https://lodash.com/docs#template) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-foo/master.svg)](https://travis-ci.org/jstransformers/jstransformer-foo)
[![Coverage Status](https://img.shields.io/codecov/c/github/jstransformers/jstransformer-foo/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-foo)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-foo/master.svg)](http://david-dm.org/jstransformers/jstransformer-foo)

[![NPM version](https://img.shields.io/npm/v/jstransformer-foo.svg)](https://www.npmjs.org/package/jstransformer-foo)

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
