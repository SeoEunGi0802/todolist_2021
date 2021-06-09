import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import DateTimePicker from './DateTimePicker'

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

export default InputArea;