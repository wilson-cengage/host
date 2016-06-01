import React from 'react';
import Component1 from 'component1/client/components/Header';
//import Component2 from 'component2/client/components/DatePicker';
import Component3 from 'component3-loader/client/components/Loader';

import './style.css';

export default class Host extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          component2: null
        };
    }

    handleComponent2Button = () => {
        System.import('component2/client/components/DatePicker').then((m) => {
            this.setState({
                component2: m.default
            });
        });
    }

    render () {
        return (
            <div>
                <h1>Host Container (mt4)</h1>
                <fieldset className="bundle-fieldset">
                    <legend>Component:</legend>
                    <ul>
                        <li><Component1/></li>
                        <li>
                            <button onClick={this.handleComponent2Button}>Show Component 2</button>
                            {this.state.component2 == null?null:<div>Component 2 (Progressively Loaded): <this.state.component2/></div>}
                        </li>
                        <li><Component3 package="component3-package2" component="Accordion"/></li>
                        <li><Component3 package="component3-package1" component="Carousel"/></li>
                        <li><Component3 package="component3-package2" component="Hint"/></li>
                        <li><Component3 package="component3-package1" component="Email"/></li>
                    </ul>
                </fieldset>
            </div>);
    }
}