const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  // '/api' 경로로 오는 모든 요청을 Express 서버로 프록시합니다.
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://localhost:8080", // Express 서버 주소
      changeOrigin: true, // 필요한 경우 서버의 원본을 변경합니다.
    })
  );

  app.use(
    "/api/session",
    createProxyMiddleware({
      target: "http://localhost:8080", // Express 서버 주소
      changeOrigin: true, // 필요한 경우 서버의 원본을 변경합니다.
    })
  );
};
