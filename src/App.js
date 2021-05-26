import { Button, TextField, Typography } from '@material-ui/core';
import { KeyboardDatePicker, KeyboardTimePicker } from '@material-ui/pickers';
import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
      startDate: null,
      startTime: null,
      endDate: null,
      endTime: null
    }
  }

  render() {
    return (
      <div className="App">
        <div className="header">TODO LIST</div>
        <div className="input_area">
          <TextField label="제목" helperText="TodoList 제목" size="normal" margin="normal" fullWidth required
            value={this.state.title}
            onChange={(e) => this.setState({ title: e.target.value })}
          />
          <TextField label="상세내용" size="normal" margin="normal" fullWidth multiline
            value={this.state.content}
            onChange={(e) => this.setState({ content: e.target.value })}
          />
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="yyyy/MM/DD"
            margin="normal"
            label="시작 예정일"
            value={this.state.startDate}
            onChange={(value) => this.setState({ startDate: value })}
            style={{ width: '50%' }}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
          <KeyboardTimePicker
            margin="normal"
            label="시작시간"
            variant="inline"
            value={this.state.startTime}
            onChange={(value) => this.setState({ startTime: value })}
            style={{ width: '50%' }}
            KeyboardButtonProps={{
              'aria-label': 'change time',
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
}

export default App;