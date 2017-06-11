'use strict'

const lodash = {
  template: require('lodash.template'),
  mixin: require('lodash.mixin'),
  assign: require('lodash.assign'),
  omit: require('lodash.omit')
}

exports.name = 'lodash'
exports.inputFormats = ['lodash', 'html']
exports.outputFormat = 'html'

exports.compile = function (str, options) {
  options = options || {}
  if (options.mixins) {
    Object.keys(options.mixins).forEach(key => {
      const value = options.mixins[key]
      const mixin = {}
      mixin[key] = value

      lodash.mixin(mixin)
    })
  }
  options = lodash.omit(options, ['mixins'])
  const compile = lodash.template(str, options)
  let context = lodash.omit(options, ['imports'])

  return locals => {
    context = lodash.assign(context, locals)
    return compile(context)
  }
}
