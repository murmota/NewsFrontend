const path = require('path');

module.exports = {
  transpileDependencies: true,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', path.resolve(__dirname, 'src'))
      .set('api', path.resolve(__dirname, 'src/api.js')); // Подставьте путь к вашему файлу api.js
    
    // Добавьте это для настройки feature флага
    config.plugin('define').tap(definitions => {
      definitions[0]['__VUE_PROD_HYDRATION_MISMATCH_DETAILS__'] = JSON.stringify(false);
      return definitions;
    });
  }
};
