import './public-path';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
// function render() {
//   root.render(
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   );
// }
export async function bootstrap() {
  console.log('react app bootstraped');
}

export async function mount() {
  root.render(
    // @ts-ignore
    <BrowserRouter basename={window.__POWERED_BY_QIANKUN__?"/micro-app2":"/"}>
    <App/></BrowserRouter>
  )
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
  root.render(
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  )
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
