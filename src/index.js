import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './store'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const emptyFunc = () => {}
if(process.env.NODE_ENV === 'production') { // empty console
    window.console = {
        log: emptyFunc,
        error: emptyFunc,
        warn: emptyFunc,
        info: emptyFunc,
        assert: emptyFunc,
        clear: emptyFunc,
        debug: emptyFunc,
        group: emptyFunc,
        groupEnd: emptyFunc,

    }
}

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));