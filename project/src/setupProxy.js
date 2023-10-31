const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  // 로그인 세션유지
  app.use(
    "/loginCheck",
    createProxyMiddleware({
      target: "http://localhost:9000/User", // Express 서버 주소
      changeOrigin: true, // 필요한 경우 서버의 원본을 변경합니다.
    })
  );

  app.use(
    "/logout",
    createProxyMiddleware({
      target: "http://localhost:9000/User", // Express 서버 주소
      changeOrigin: true, // 필요한 경우 서버의 원본을 변경합니다.
    })
  );

  app.use(
    "/youtubeVideo",
    createProxyMiddleware({
      target: "http://localhost:9000",
      changeOrigin: true,
    })
  );

  //관리자 페이지 유저정보
  app.use(
    "/Users",
    createProxyMiddleware({
      target: "http://localhost:9000/User",
      changeOrigin: true,
    })
  );
  //관리자 페이지 콘텐츠정보
  app.use(
    "/Contents",
    createProxyMiddleware({
      target: "http://localhost:9000/Content",
      changeOrigin: true,
    })
  );

  //콘텐츠 업데이트 정보가져오기
  app.use(
    "/SelectData",
    createProxyMiddleware({
      target: "http://localhost:9000/Content",
      changeOrigin: true,
    })
  );
};
