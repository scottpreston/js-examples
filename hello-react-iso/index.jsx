var http = require('http')
var React = require('react')

var style =  {

};
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'})
  res.end(
    React.renderToString(
<html>
  <head>
    <title>Hello React Isomorphic</title>
  </head>
  <body style={{fontFamily: "arial"}}>
  <h1>Hello React Isomorphic</h1>
  <p>If you see "hello world" below it works!</p>
  <p>hello world</p>
  </body>
  </html>

    )
  )
}).listen(5000)
