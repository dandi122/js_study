/* config-overrides.js */

// module.exports = function override(config, env) {
//     //do stuff with the webpack config...
//     return config;
//   }

const path = require('path');
module.exports = {
    webpack: function(config, env) {
        config.output = {
            ...config.output,
            // 아래 기술한 내용은 이전 내용을 덥어쓴다
            path:path.resolve(__dirname, '../server/src/main/resources/static'), // 원하는 위치 지정
            filename: 'bundle.js'
        }
        return config
    }
}