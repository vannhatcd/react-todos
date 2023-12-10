import PropTypes from 'prop-types';
import React from 'react';



const TodoItem = (props) => {
    const todo = props.todoProps;
    const changeStateTodo = props.changeStateTodoFunc;
    const deleteStateTodo = props.deleteTodoFunc;
    
    const styleTodoItem = {
        background: '#f4f4f4',
        padding: '10px',
        borderRadius: '5%',
        textDecoration: todo.completed ? 'line-through' : 'none'
    }

    const btnDeleteStyle = {
        background: 'red',
        color: 'white',
        padding:'5px 10px',
        borderRadius: '10px',
        float: 'right'
    }
    
    return (
        <p style={styleTodoItem} >
            <input type="checkbox" name="" id="" onChange={changeStateTodo.bind(this, todo.id)} checked={todo.completed}/>
            { todo.title }
            <button style={btnDeleteStyle} onClick={deleteStateTodo.bind(this, todo.id)}>Delete</button>
        </p>
    );
}

TodoItem.propTypes = {
    todoProps: PropTypes.object.isRequired,
    changeStateTodoFunc: PropTypes.func.isRequired,
    deleteTodoFunc: PropTypes.func.isRequired
}

export default TodoItem;