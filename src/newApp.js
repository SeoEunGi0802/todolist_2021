import React, { useState } from 'react';
import { Typography } from '@material-ui/core';
import InputArea from './components/InputArea'
import ListArea from './components/ListArea'
import './App.css';

function NewApp(props) {
    const [todoList, setTodoList] = useState([]);
    return <div className="App">
        <div className="header">TODO LIST</div>
        <InputArea todoList={todoList} changeTodoList={setTodoList}
        />
        <ListArea list={todoList} />
        <Typography variant="body2" align="center">
            {'Copyright β μμκΈ° ' + new Date().getFullYear() + '.'}
        </Typography>
    </div>
}

export default NewApp;