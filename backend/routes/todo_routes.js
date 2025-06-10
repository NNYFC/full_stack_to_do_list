const express = require('express');
const todo_impl = require('./../controllers/todo_controller');

const router = express.Router();

/**
 * @swagger
 * /todos:
 *   get:
 *     summary: Get all todo
 *     responses:
 *       200:
 *         description: Get all todo
 *         content:
 *           application/json:
 *               schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   title:
 *                     type: string
 *                     example: Backend dev pratice
 *                   description:
 *                     type: string
 *                     example: I should practice backend development atleast once a week
 *                   created_at:
 *                     type: date
 *                     example: 2025-06-10 02:46:00
 *                   updated_at:
 *                     type: date
 *                     example: 2025-06-10 12:46:00
 */
router.get('/', todo_impl.todos_list);


/**
 * @swagger
 * /todos/{id}:
 *   get:
 *     summary: Get a todo
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *           type: integer
 *           format: int64
 *     responses:
 *       200:
 *         description: Get a single todo by id
 *         content:
 *           application/json
 */
router.get('/:id', todo_impl.todo_get);


/**
 * @swagger
 * /todos:
 *   post:
 *     summary: Create a new item
 *     consumes: application/json
 *     parameters:
 *       - in: body
 *         name: body
 *         schema:
 *            type: object
 *            properties:
 *              title:
 *                 type: string
 *              description:
 *                  type: string 
 *     responses:
 *       201:
 *         description: Item created successfully
 *       400:
 *         description: Invalid input
 */
router.post('/', todo_impl.todo_add);


/**
 * @swagger
 * /todos/{id}:
 *   put:
 *     summary: Modify a todo
 *     consumes: application/json
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *           type: integer
 *           format: int64
 *     responses:
 *       200:
 *         description: Update a particular todo by id
 *         content:
 *           application/json
 */
router.put('/:id', todo_impl.todo_update);


/**
 * @swagger
 * /todos/{id}:
 *   delete:
 *     summary: Delete a todo
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *           type: integer
 *           format: int64
 *     responses:
 *       200:
 *         description: Delete a particular todo by id
 *         content:
 *           application/json
 */
router.delete('/:id', (req, res) => {
    res.send('Delete todo')
});
  
module.exports = router;