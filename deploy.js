var config = require('yaml-env-config')('config');
var writeData = require('write-data');

writeData.sync('merged.yaml', config);
