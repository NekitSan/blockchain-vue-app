const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
    publicPath: process.env.NODE_ENV === 'production' ? '/blockchain-vue-app/' : '/',
    transpileDependencies: true,

    pluginOptions: {
      'style-resources-loader': {
        preProcessor: 'sass',
        patterns: []
      }
    },
    css: {
      loaderOptions: {
        sass: {
          additionalData: '@import "~@/assets/styles/params.module.sass"',
        }
      }
    }
});