import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import "github-fork-ribbon-css/gh-fork-ribbon.css";

import App from './component/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
