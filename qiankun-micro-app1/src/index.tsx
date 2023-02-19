import './public-path';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
function render() {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
export async function bootstrap() {
  console.log('react app bootstraped');
}
// @ts-ignore
export async function mount(props) {
  console.log(props);
  // @ts-ignore
  props.onGlobalStateChange((state,prev) => {
    console.log(state, prev);
    // setTimeout(() => {
    //   props.setGlobalState({...state,age:30}) 
    // }, 2000);
    
  })
  render();
}
// @ts-ignore
export async function unmount(props) {
  console.log("unmount");
  
}
// @ts-ignore
export async function update(props) {
  console.log('update props', props);
}

// @ts-ignore
if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
