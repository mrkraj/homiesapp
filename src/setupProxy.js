const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/homies',
    createProxyMiddleware({
      target: 'http://homies-env.eba-jdsdvmvp.us-west-2.elasticbeanstalk.com',
      changeOrigin: true,
    })
  );
};