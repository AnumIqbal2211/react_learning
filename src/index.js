import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactUseEffect from "./components/ReactUseEffect";
import ReactRenderingElements from "./components/ReactRenderingElements";
import ReactCompAndProp from "./components/ReactCompAndProp";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <ReactUseEffect />
    <ReactRenderingElements />
    <ReactCompAndProp />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
