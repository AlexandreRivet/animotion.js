const { defineConfig } = require('@vue/cli-service');
const path = require('path');

module.exports = defineConfig({
  configureWebpack: {
    resolve: {
      symlinks: true,
      alias: {
        '@animotion/easing': path.resolve(__dirname, '..', '..', 'libs', 'easing', 'lib', 'index.ts'),
      },
    }
  }
});
