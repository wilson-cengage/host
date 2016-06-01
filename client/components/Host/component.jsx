import React from 'react';
import Component1 from 'component1/client/components/Header';
import Component2 from 'component2/client/components/DatePicker';
import Component3 from 'component3-loader/client/components/Loader';

import './style.css';

export default class Host extends React.Component {

    render () {
        return (
            <div>
                <h1>Host Container (mt4)</h1>
                <fieldset className="bundle-fieldset">
                    <legend>Component:</legend>
                    <ul>
                        <li><Component1/></li>
                        <li><Component2/></li>
                        <li><Component3 package="component3-package2" component="Accordion"/></li>
                        <li><Component3 package="component3-package1" component="Carousel"/></li>
                        <li><Component3 package="component3-package2" component="Hint"/></li>
                        <li><Component3 package="component3-package1" component="Email"/></li>
                    </ul>
                </fieldset>
            </div>);
    }
}