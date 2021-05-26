import { Button, TextField, Typography, List, ListItem, ListItemText } from '@material-ui/core';
import { KeyboardDatePicker, KeyboardTimePicker } from '@material-ui/pickers';
import React from 'react';
import SaveIcon from '@material-ui/icons/Save';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      title: "",
      content: "",
      startDate: null,
      startTime: null,
      endDate: null,
      endTime: null
    }
  }
//validation에서 날짜의 검색은 제외 하였습니다.
//minDate를 이용하여 종료날짜에 최소 날짜를 시작날짜로 주었고 시작날짜가 입력되기 전까지 종료날짜를 비활성화하여 입력을 막습니다.
//checkValidate()함수에서 특수문자의 입력을 금지하여 sqlInjection, xss공격을 대비하도록 시도는 해보았습니다.
  checkValidate() {
    const {
      title, content, startDate, startTime, endDate, endTime
    } = this.state;
    if (!title || !content || !startDate || !startTime || !endDate || !endTime) {
      alert("빈칸을 채워주세요.");
      return false
    } else if (title.includes("<") || content.includes("<") || title.includes("+") || content.includes("+") || title.includes("=") || content.includes("=") || title.includes("{") || content.includes("{")) {
      alert("일부 금지된 특수문자가 포함되어있습니다. ['<>', '+', '=']");
      return false
    }
    return true
  }

  saveTodoList() {
    if (this.checkValidate()) {
      const { todoList, title, content, startDate, startTime, endDate, endTime } = this.state;
      todoList.push({ title: title.trim(), content: content.trim(), startDate, startTime, endDate, endTime });
      this.setState({
        todoList,
        title: "",
        content: "",
        startDate: null,
        startTime: null,
        endDate: null,
        endTime: null,
      });
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
          <KeyboardDatePicker
            disableToolbar
            readOnly={this.state.startDate === null ? true : false}
            variant="inline"
            format="yyyy/MM/DD"
            margin="normal"
            label="종료 예정일"
            minDate={this.state.startDate}
            value={this.state.endDate}
            onChange={(value) => this.setState({ endDate: value })}
            style={{ width: '50%' }}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
          <KeyboardTimePicker
            readOnly={this.state.startTime === null ? true : false}
            margin="normal"
            label="종료시간"
            variant="inline"
            value={this.state.endTime}
            onChange={(value) => this.setState({ endTime: value })}
            style={{ width: '50%' }}
            KeyboardButtonProps={{
              'aria-label': 'change time',
            }}
          />
          <Button
            variant="outlined"
            startIcon={<SaveIcon />}
            style={{ float: 'right' }}
            onClick={() => this.saveTodoList()}
          >
            Save
          </Button>
        </div>
        <div className="list_area">
          <List>
            {this.state.todoList.map((todoItem, idx) => {
              const {
                title, content, startDate, startTime, endDate, endTime
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
        <Typography variant="body2" align="center">
          {'Copyright ⓒ 서은기 ' + new Date().getFullYear() + '.'}
        </Typography>
      </div>
    );
  }
}

export default App;