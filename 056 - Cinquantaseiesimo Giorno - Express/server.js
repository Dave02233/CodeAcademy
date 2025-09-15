const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const start = Date.now();
  res.send('Hello from Express server!');
  const duration = Date.now() - start;
  console.log(`Request processed in ${duration}ms`);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});
