console.log("Hello world")
// in termial run js file with node.js -> node index.js
// in termial run npm init to get package.json and start npm module (show me what modules I got)
// npm install figlet or npm i figlet ( with -g option, can install in every project file)
// npm uninstall figlet 삭제 명령어
var figlet = require("figlet"); // module 가져와 사용

figlet("Hello World!!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});

// Express -> Web framework
// 실행 후 웹사이트 localhost:3000 접속 -> ctrl c로 코드 종료
// 3000번 port로 접속
const express = require('express')
const app = express()
var cors = require('cors')
const port = 3000
app.use(cors())
// get: http method 정보 전달 방식, 주소창을 이용한다.
// 라우트: 주소창 뒤에 계속 이어서 붙어지는 거
// 콜백 함수 () => {}: 함수 끝나고 실행되는 콜백 함수
setTimeout(()=>{console.log("in a sec")}, 1000) // 3000ms 뒤에 () => {} 콜백 함수 실행

// '/' -> 기본 루트 주소가 들어왔을 때 실행
// req: request, res: response
app.get('/', function (req, res) {
  res.send('Hello World') // res 응답으로 hello world -> localhost 창에 나타남.
})
app.get('/dog', function (req, res) {
    res.send('<h2>Hello Dog</h2>')  // localhost:3000/dog로 가면 hello dog 실행
})
app.get('/cat', function (req, res) {
    res.send('<h1>Hello Cat</h1>') // html로 전달 가능
}) 
app.get('/bird', function (req, res) {
    //res.send({'sound': '멍멍'}) // json object 전달 가능
    res.json({'sound': '멍멍'}) // 똑같지만 json 명령어가 더 빠름
}) 
// id로 받거나 query로 받거나
app.get('/user/:id', (req, res) => {
    // const q = req.params // localhost:3000/user/something 입력시 q.id로 값 들어감
    // console.log(q.id)

    const q = req.query // query는 주소창에 localhost:3000/user/asdf?q=will&name=cheol
    console.log(q)      //asdf는 id인가, q, name 변수를 const q에 저장
    res.json({'userid': q.name})
})

// api 만들기
app.get('/sound/:name', function (req, res) {
    const { name } = req.params // 변수를 name으로 받는다
    console.log(name)

    if(name == "pig"){
        res.json({'sound': '꿀'})
    } else if(name == "peng"){
        res.json({'sound': 'peng'})
    } else if(name == 'kang'){
        res.json({'json': 'kang'})
    } else{
        res.json('??')
    }
}) 
// 3000 port listening 중
// listen 끝나면 콜백 함수 실행
app.listen(port, () => {
    console.log(`example of listening on port ${port}`)
})
//cors
