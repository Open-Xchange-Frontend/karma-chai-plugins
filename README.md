karma-chai-plugins
==================

> [Chai](http://chaijs.com) browser plugins set for [Karma](http://karma-runner.github.io)

Installation
------------

Install the `karma-chai-plugins`:

```sh
$ npm install karma-chai-plugins --save-dev
```

Add `chai` and plugins you need to the `frameworks` key in your Karma configuration:

```coffee
module.exports = (karma) ->
  karma.configure

    # frameworks to use
    frameworks: ['mocha', 'chai', 'chai-as-promised']

    # ...
```

Bundled plugins
---------------

* [chai](http://chaijs.com)
* [chai-as-promised](http://chaijs.com/plugins/chai-as-promised)
* [chai-jquery](http://chaijs.com/plugins/chai-jquery) (jQuery should be included manually)
* [sinon-chai](http://chaijs.com/plugins/sinon-chai) (sinon will be included automatically)

Limited require.js support
--------------------------

`karma-chai-plugins` supports `requirejs` in tests, but for now in should be stated in frameworks keys before `chai` and other plugins.

Correct usage:
```coffee
frameworks: ['requirejs', 'chai', 'chai-as-promised']
```

Additional features
-------------------

`chai-as-promised` plugin also provides global `expectDeferred` function that allows to test ‘jQuery-style promises’ as other promsises implementation.

Usage:
```coffee
expectDeferred(somePromise).to.become(someValue)
```
