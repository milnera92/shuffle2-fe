const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/rss',
    createProxyMiddleware({
      target: 'https://shuffle2-be.onrender.com',
      changeOrigin: true,
    })
  );
};