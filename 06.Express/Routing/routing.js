var express = require('express');
var app = express();
app.listen(3000, function () {
   console.log('Server is listening @3000\nGET /movies\nPOST /movies\nPUT /movies/avata\nDELETE /moives/avata');
});

app.get('/', (req, res) => {
   res.send('GET request, /');
});

// 영화 목록 보기 Get 요청
app.get('/movies', (req, res) => {
   res.send('GET request, /movies');
});

// 영화 상세 보기 Get 요청
app.get('/movies/avata', (req, res) => {
   res.send('GET request, /movies/avata');
});

// accept POST request on the homepage
app.post('/movies', (req, res) => {
   res.end('POST request, /movies');
});

// PUT request at /movies/avata
app.put('/movies/avata', (req, res) => {
   res.end('PUT request, /movies');
});

// 영화 개별 상세 정보 삭제
app.delete('/movies/avata', (req, res) => {
   res.end('DELETE request, /movies/avata');
});