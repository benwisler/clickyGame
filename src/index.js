import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

function ready(fn) {
    if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
      fn();

    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }
  var myFunction = new function(){
    alert("hello!")
  }

  export default myFunction;