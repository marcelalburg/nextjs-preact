const path = require('path');
const webpack = require('webpack');

// next.config.js
module.exports = {
    distDir: 'build',
    poweredByHeader: false,
    target: "serverless",    
    webpack: (config, options) => {
        if (options.isServer) {
            config.externals = ['react', 'react-dom', ...config.externals]
        }
    
        config.resolve.alias = Object.assign({}, config.resolve.alias, {
            react$: 'preact/compat',
            'react-dom$': 'preact/compat',
            react: 'preact/compat',
            'react-dom': 'preact/compat'
        })
        return config;
      }
}