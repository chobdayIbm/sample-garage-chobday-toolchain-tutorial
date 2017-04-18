var config = require('yaml-env-config')('config');
var writeData = require('write-data');

console.log(config);

writeData.sync('merged.yaml', config);
