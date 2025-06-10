
const GET_ALL_TODOS = "SELECT * FROM todo";
const GET_A_TODO = "SELECT * FROM todo WHERE id = $1";
const ADD_TODO_RECORD = "INSERT INTO todo (title, description, created_at) VALUES ($1, $2, $3) RETURNING id, title, description, created_at, updated_at";
const UPDATE_TODO_RECORD = "UPDATE INTO todo SET title = $1, description = $2, updated_at = $3 WHERE id = $4 RETURNING id, title, description, created_at, updated_at";
const DELETE_TODO_RECORD = "DELETE FROM todo WHERE id = $1";

module.exports = { GET_ALL_TODOS, GET_A_TODO, ADD_TODO_RECORD,  UPDATE_TODO_RECORD, DELETE_TODO_RECORD};