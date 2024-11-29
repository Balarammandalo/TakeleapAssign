const http = require('http');

const server = http.createServer((req, res) => {

  res.setHeader('Content-Type', 'application/json');

  const response = {
    message: 'Hello, this is your JSON response!',
    status: 'success',
    timestamp: new Date().toISOString()
  };

  res.writeHead(200); 
  res.end(JSON.stringify(response));
});


server.listen(3000, () => {
  console.log(`Server is running and listening on http://localhost:${PORT}`);
});
