const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const app = express();
const port = process.env.PORT || 3000;

require('dotenv').config();

const { pool } = require("./db_config");

// Swagger setup
const swaggerConfig = {
    swaggerDefinition: {
      todo_list: '1.0.0',
      info: {
        title: 'TODO API',
        version: '1.0.0',
        description: 'REST API TODO list documentation',
      },
      servers: [
        {
          url: 'http://localhost:3000',
        },
      ],
    },
    apis: ['index.js','./routes/*.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerConfig);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));


/**
 * @swagger
 * /:
 *   get:
 *     summary: Base url
 *     responses:
 *       200:
 *         description: Root endpoint
 *         content:
 *           application/json
 */
app.get('/', (req, res) => {
  res.send('Welcome to the TODO list Rest API!')
});

app.listen(port, () => {
  console.log(`TODO API listening on port ${port}`)
});
