import React, { useState, useEffect } from 'react';
import { Button, TextField, Typography, List, ListItem, ListItemText } from '@material-ui/core';
import { KeyboardDatePicker, KeyboardTimePicker } from '@material-ui/pickers';
import SaveIcon from '@material-ui/icons/Save';
import './App.css';

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

const DateTimePicker = (props) => {
    return <>
        <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="yyyy/MM/DD"
            margin="normal"
            label={props.dateLabel}
            value={props.date}
            onChange={(value) => props.changeDate(value)}
            style={{ width: '50%' }}
            KeyboardButtonProps={{
                'aria-label': 'change date'
            }}
        />
        <KeyboardTimePicker
            margin="normal"
            label={props.timeLabel}
            variant="inline"
            value={props.time}
            onChange={(value) => props.changeTime(value)}
            style={{ width: '50%' }}
            KeyboardButtonProps={{
                'aria-label': 'change time'
            }}
        />
    </>
}

const InputArea = (props) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [startDate, setStartDate] = useState(null);
    const [startTime, setStartTime] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [endTime, setEndTime] = useState(null);
    const [isError, setIsError] = useState(false);
    const { todoList, changeTodoList } = props;

    const checkValidate = () => {
        if (!title || !content || !startDate || !startTime || !endDate || !endTime) {
            alert("빈칸을 채워주세요.");
            return false
        } else if (title.includes("<") || content.includes("<") || title.includes("+") || content.includes("+") || title.includes("=") || content.includes("=") || title.includes("{") || content.includes("{")) {
            alert("일부 금지된 특수문자가 포함되어있습니다. ['<>', '+', '=']");
            return false
        }
        return true
    }

    const saveTodoList = () => {
        if (checkValidate()) {
            changeTodoList([...todoList, { title: title.trim(), content: content.trim(), startDate, startTime, endDate, endTime }]);
            setTitle("");
            setContent("");
            setStartDate(null);
            setStartTime(null);
            setEndDate(null);
            setEndTime(null);
        } else {
            setIsError(true);
        }
    }

    return <div className="input_area">
        <TextField label="제목" helperText="TodoList 제목" size="normal" margin="normal" fullWidth required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
        />
        <TextField label="상세내용" size="normal" margin="normal" fullWidth multiline
            value={content}
            onChange={(e) => setContent(e.target.value)}
        />
        <DateTimePicker
            dateLabel="시작 예정일"
            date={startDate}
            timeLabel="시작 시간"
            time={startTime}
            changeDate={setStartDate}
            changeTime={setStartTime} />
        <DateTimePicker
            dateLabel="종료 예정일"
            date={endDate}
            timeLabel="종료 시간"
            time={endTime}
            changeDate={setEndDate}
            changeTime={setEndTime} />
        <Button
            variant="outlined"
            startIcon={<SaveIcon />}
            style={{ float: 'right' }}
            onClick={() => saveTodoList()}
        >
            Save
            </Button>
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