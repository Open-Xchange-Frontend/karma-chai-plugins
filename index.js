var path = require('path');
var fs = require('fs');

var pattern = function(file) {
    return {pattern: file, included: true, served: true, watched: false};
};

var plugins = {
    'chai': function(name, files) {
        var filePath = path.resolve(require.resolve('chai'), '../chai.js');

        files.unshift(pattern(path.join(__dirname, 'chai-adapter.js')));
        //TODO: may be, make sure, this is added before *all* other chai plugins
        files.unshift(pattern(filePath));
    },
    'chai-as-promised': function(name, files) {
        var filePath = require.resolve(name);

        files.unshift(pattern(filePath));
    },
    'sinon-chai': function(name, files) {
        var filePath = require.resolve(name);

        files.unshift(pattern(filePath));
        files.unshift(pattern(path.resolve(require.resolve('sinon'), '../../pkg/sinon.js')));
    },
    'chai-jquery': function(name, files) {
        var filePath = require.resolve(name);

        files.unshift(pattern(filePath));
    }
};

var $inject = ['config.files'];
var exports = {};
var label, plugin;

for (label in plugins) {
    plugin = plugins[label].bind(null, label);
    plugin.$inject = $inject;

    exports['framework:' + label] = ['factory', plugin];
}

module.exports = exports;
