import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import FileUpload from './Component/FileUpload';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<FileUpload />, document.getElementById('root'));
registerServiceWorker();
