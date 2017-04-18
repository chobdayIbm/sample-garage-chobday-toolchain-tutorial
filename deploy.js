var config = require('yaml-env-config')('config/manifest/');
var writeData = require('write-data');

console.log(config);

writeData.sync('manifest.yml', config);
