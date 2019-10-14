const express = require('express');
const app = express();
const port = 5000;
const routes = require('./routes/approutes');
const sql = require('./db')
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(bodyParser.json());      
app.use('/addstudent', routes);
app.use('/students', routes);


module.exports = app;
app.listen(port, () => { console.log("server starts..") });
