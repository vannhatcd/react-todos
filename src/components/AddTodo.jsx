import React, { useState } from 'react';
import PropTypes from 'prop-types';

AddTodo.propTypes = {
    addTodoFunc: PropTypes.func.isRequired
};

function AddTodo(props) {
    const [title, setTitle] = useState('');
    const addTodoFunc = props.addTodoFunc;

    const styleAdd = {
        display: 'flex',
        padding: '10px 5px'
    }
    const styleInputAdd = {
        flex: '10',
        padding: "10px",
        marginRight: '10px'
    }
    const styleBtnAdd = {
        flex: '1',
        background: "grey",
        borderRadius: '5%',
        color: 'white'
    }

    const changeTitle = (event) => {
        setTitle(event.target.value)
    }

    const submitForm = event => {
        event.preventDefault();
        if(title !== '') {
            addTodoFunc(title);
            setTitle('');
        }
    }

    return (
        <form style={styleAdd} onSubmit={submitForm}>
            <input type="text" style={styleInputAdd} onChange={changeTitle} placeholder='Thêm việc' value={title}/>
            <input type='submit' style={styleBtnAdd} value='Thêm' />
        </form>
    );
}

export default AddTodo;