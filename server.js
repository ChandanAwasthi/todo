const express =  require('express');
const app = express();

app.listen(6543, () => console.log('listening at 3000'));
app.use(express.static('public'));