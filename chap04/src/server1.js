import http from "http";

http.createServer((req, res) => {
  res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
  res.write("<h1>Hello Node!</h1>");
  res.end("<p>Hello Server!</p>"); // 문자열을 클라이언트로 보낸 후 응답 종료
})
  .listen(8080, () => { // 서버 연결
    console.log("8080번 포트에서 서버 대기중!");
  });