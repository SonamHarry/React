import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import BtnDisplay from './BtnDisplay';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
// function BtnDisplay() {
//     const [number, setNumber] = useState(0);
//     function increment() {
//         setNumber(number + 1);
//     }
//     return (
//         <div>
//             <p>Number:{number}</p>
//             <button onClick={increment}>Click</button>
//         </div>
//     );
// }