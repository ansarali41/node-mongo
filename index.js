const express = require('express');

const app = express();

const rootCall = (req, res) => res.send('i know how to open node YAY!');


app.get('/', (req, res) => res.send('i know how to open node YAY!'))

app.listen(3000, () => console.log('listening on port 3000'));