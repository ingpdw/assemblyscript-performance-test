const express = require('express');
const app = express();
app.use(
  express.static('build', {
    setHeaders: (res, path) => {
      if (path.endsWith('.wasm')) {
        res.set('Content-Type', 'application/wasm');
      }
    },
  })
);

app.listen(3000, () => {
  console.log('Express server has started on port 3000');
});
