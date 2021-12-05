const app = require('./app');
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.status(200).send("<h2>Привет Express!</h2>");
})

app.listen(PORT, () => { console.log('Server has been started!!! port-' + PORT) });