const path = require('path');
function resolve (dir) {
    return path.join(__dirname, dir)
}
module.exports = {
  devServer: {
    // host: '0.0.0.0',
    // port: 8081,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/mock',
        }
      },
    },
   

  },
  lintOnSave: true,
    chainWebpack: (config)=>{
        config.resolve.alias
            .set('common', resolve('src/common'))
            .set('styles', resolve('src/assets/styles'))
            .set('imgs', resolve('src/assets/styles'))


            
    }

}

