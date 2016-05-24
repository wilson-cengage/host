import ReactDOM from 'react-dom';
import React from 'react';

import 'index_dynamic.html';
import 'systemjs.config';

SystemJS.import('./exports.bundle.js').then(function (components) {
    const Header = components.Header;
    ReactDOM.render(
        <Header/>,
        document.getElementById('root')
    );
});

