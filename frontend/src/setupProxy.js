const proxy = require('http-proxy-middleware')
const proxy = require('http-proxy-middleware')
module.exports = function(app){
    app.use(
        proxy('/api1',{
            target:'http://localhost:8000',
            changeOrigin:true,
            pathRewrite:{'/api1':''}
        })
    )
}
