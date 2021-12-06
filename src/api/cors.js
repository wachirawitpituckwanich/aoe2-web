const proxy = require('http-proxy-middleware')

module.export = function(app) {
  app.use(
    proxy("/civ", {
      target: 'https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations',
      changeOrigin: true
    })
  )
  app.use(
    proxy("/tech", {
      target: 'https://age-of-empires-2-api.herokuapp.com/api/v1/technology',
      changeOrigin: true
    })
  )
}