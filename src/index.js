import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactCompAndProp from "./components/ReactCompAndProp";
import ReactStateAndLifecycle from "./components/ReactStateAndLifecycle";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <ReactCompAndProp />
    <ReactStateAndLifecycle />
    
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
