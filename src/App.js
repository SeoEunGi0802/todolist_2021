import { Button, TextField, Typography } from '@material-ui/core';
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header">TODO LIST</div>
      <div className="input_area">
        <TextField label="제목" helperText="TodoList 제목" size="normal" margin="normal" fullWidth required />
        <TextField label="상세내용" size="normal" margin="normal" fullWidth multiline />
        <TextField
        label="완료 예정일"
        type="datetime-local"
        InputLabelProps={{
          shrink: true,
        }}
        />
      </div>
      <div className="list_area">리스트 영역</div>
      <Typography variant="body2" align="center">
        {'Copyright ⓒ 서은기 ' + new Date().getFullYear() + '.'}
      </Typography>
    </div>
  );
}

export default App;