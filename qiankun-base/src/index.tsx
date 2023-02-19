import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { registerMicroApps, start, initGlobalState, MicroAppStateActions } from 'qiankun';
import { BrowserRouter } from 'react-router-dom';
const state = {
  nickname:'森宝'
}
// 初始化state
const actions: MicroAppStateActions = initGlobalState(state)
actions.onGlobalStateChange((state, prev) => {
  console.log(state, prev);
  
})
setTimeout(() => {
 actions.setGlobalState({...state,age:19}) 
},2000)
actions.offGlobalStateChange()

registerMicroApps([
  {
    name: 'micro-app1', // app name registered
    entry: '//localhost:3001',
    container: '#micro-app1',
    activeRule: '/micro-app1',
    props: {
      nickname:"deerrrrr"
    }
  },
  {
    name: 'micro-app2',
    entry: '//localhost:3002',
    container: '#micro-app2',
    activeRule: '/micro-app2',
    props: {
      nickname:"deerrrrr"
    }
  },
  {
    name: 'micro-app3',
    entry: '//localhost:8080',
    container: '#micro-app3',
    activeRule: '/micro-app3',
    props: {
      nickname:"deerrrrr"
    }
  },
]);

start();
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
