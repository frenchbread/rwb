import express from 'express';

const app = express();

app.set('port', 3000);

app.use('/', express.static(__dirname));

app.listen(app.get('port'), () => {
  console.log(`Server started: http://localhost:${app.get('port')}/`);
});
