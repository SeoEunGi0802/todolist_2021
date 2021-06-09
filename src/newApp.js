import React, { useState } from 'react';
import { Typography, List, ListItem, ListItemText } from '@material-ui/core';
import './App.css';
import InputArea from './components/InputArea'

function ListArea(props) {
    return <div className="list_area">
        <List>
            {props.list.map((todoItem, idx) => {
                const {
                    title, startDate, startTime, endDate, endTime
                } = todoItem;
                return (
                    <ListItem key={idx} role={undefined} dense button>
                        <ListItemText
                            primary={title}
                            secondary={startDate?.format('yyyy-MM-DD') + ' ' + startTime?.format('HH:MM') + ' ~ ' + endDate?.format('yyyy-MM-DD') + ' ' + endTime?.format('HH:MM')}
                        />
                    </ListItem>
                )
            })}
        </List>
    </div>
}

function NewApp(props) {
    const [todoList, setTodoList] = useState([]);
    return <div className="App">
        <div className="header">TODO LIST</div>
        <InputArea todoList={todoList} changeTodoList={setTodoList}
        />
        <ListArea list={todoList} />
        <Typography variant="body2" align="center">
            {'Copyright ⓒ 서은기 ' + new Date().getFullYear() + '.'}
        </Typography>
    </div>
}

export default NewApp;