import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

module.exports = (on, config) => {
    on('before:browser:launch', (browser = {}, launchOptions) => {
        console.log(launchOptions.args)
        
        if (browser.name == 'chrome') {
            launchOptions.args.push('--disable-gpu')
        }
        
        return launchOptions
    }),
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
