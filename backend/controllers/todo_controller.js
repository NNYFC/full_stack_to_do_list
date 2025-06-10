const asyncHandler = require("express-async-handler");
const { pool } = require("./../db_config");
const db_queries = require("./../queries/todo_queries");

exports.todos_list = asyncHandler(async (req, res, next) => {
    const result = await pool.query(db_queries.GET_ALL_TODOS);
    res.send(result.rows);
});

exports.todo_get = asyncHandler(async (req, res, next) => {
    const id = req.params.id;
    const result = await pool.query(db_queries.GET_A_TODO, [id]);
    res.send(result.rows[0]);
});

exports.todo_add = asyncHandler(async (req, res, next) => {
    const {title, description} = req.body;
    const result = await pool.query(db_queries.ADD_TODO_RECORD, [title, description, new Date()]);
    res.send(result.rows[0]);
});

exports.todo_update = asyncHandler(async (req, res, next) => {
    const id = req.params.id;
    const {title, description} = JSON.parse(req.body);
    const result = await pool.query(db_queries.UPDATE_TODO_RECORD, [title, description, new Date(), id]);
    res.send(result.rows[0]);
});

exports.todo_deletion = asyncHandler(async (req, res, next) => {
    const id = req.params.id;
    const result = await pool.query(db_queries.DELETE_TODO_RECORD, [id]);
    res.send({message: 'Successfully deleted'});
});