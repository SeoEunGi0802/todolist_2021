## 0609(0519 보강)
 + [ KeyboardDatePicker, list, InputArea div 부분 변경 ](/src/newApp.js)
 + [ DateTimePicker 부분을 파일로 쪼개서 Import시켜 시각성 높이기 ](/src/components/DateTimePicker.js)
 + [ InputArea 부분을 파일로 쪼개서 Import시켜 시각성 높이기 ](/src/components/InputArea.js)
 + [ ListArea 부분을 파일로 쪼개서 Import시켜 시각성 높이기 ](/src/components/ListArea.js)
---------------------------------------------------------------------------------------------------------------------------------------
## 0602
 ###### [Components and Props](https://ko.reactjs.org/docs/components-and-props.html)
 + 컴포넌트를 통해 UI를 재사용 가능한 개별적인 여러 조각으로 나누고, 각 조각을 개별적으로 살펴볼 수 있도록 하는 방식
    1. ["함수 컴포넌트"와 클래스 컴포넌트](https://ko.reactjs.org/docs/components-and-props.html#function-and-class-components)
        - 데이터를 가진 하나의 “props” (props는 속성을 나타내는 데이터입니다) 객체 인자를 받은 후 React 엘리먼트를 반환
    2. [컴포넌트 렌더링](https://ko.reactjs.org/docs/components-and-props.html#rendering-a-component)
        - React 엘리먼트는 사용자 정의 컴포넌트로도 나타낼 수 있다.
    3. [컴포넌트 합성](https://ko.reactjs.org/docs/components-and-props.html#composing-components)
        - 자신의 출력에 다른 컴포넌트를 참조할 수 있다. 이는 모든 세부 단계에서 동일한 추상 컴포넌트를 사용할 수 있음을 의미
    4. [컴포넌트 추출](https://ko.reactjs.org/docs/components-and-props.html#extracting-components)
        - 컴포넌트를 여러 개의 작은 컴포넌트로 나누는 것

 ###### [Hook의 개요](https://ko.reactjs.org/docs/hooks-intro.html)
 + Hook은 React 버전 16.8부터 React 요소로 새로 추가, 기존 Class 바탕의 코드를 작성할 필요 없이 상태 값과 여러 React의 기능을 사용할 수 있다.
    1. [State Hook](https://ko.reactjs.org/docs/hooks-overview.html#state-hook)
        - Effect Hook, 즉 useEffect는 함수 컴포넌트 내에서 이런 side effects를 수행할 수 있게 해준다.
    2. [Using the Effect Hook](https://ko.reactjs.org/docs/hooks-effect.html)
        - 더욱 자세한 설명이 나와있다.

 ###### [기존 App.js -> Appfunc.js의 형식으로 변환]
 + 기존 TodoList를 출력하는 [App.js](/src/App.js) => [newApp.js](/src/newApp.js) 처럼 hook 형식으로 변형
---------------------------------------------------------------------------------------------------------------------------------------
## 0526
 + 날짜와 시간 선택시 값이 변경되도록 함
 + 입력된 글자를 변수에 할당하도록 각각 코드 추가
 + 저장 버튼추가, 클릭시 배열에 추가되고 state를 초기화하는 함수와 배열 선언
 + validation 코드 추가
---------------------------------------------------------------------------------------------------------------------------------------
## 0512
 + material-ui 모듈을 사용하여 달력(App.js - KeyboardDatePicker)과 시계(App.js - KeyboardTimePicker)를 페이지에 추가하고 언어를 한국어(index.js - moment/locale/ko)로 변경
---------------------------------------------------------------------------------------------------------------------------------------
<details>
<summary>Getting Started with Create React App</summary>
<div markdown="Getting Started with Create React App">

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

</div>
</details>