import React from 'react';
import Component1 from 'component1/client/components/ToolbarWidget';
import Component3 from 'component3-loader/client/components/Loader';

import './style.css';

export default class Host extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            component2: null,
            component3Accordion: null,
            component3Carousel: null,
            component3Email: null,
            component3Hint: null,
            component3Accordion2: null,
        };
    }

    handleComponent2Button = () => {
        System.import('component2/client/components/DatePicker').then((m) => {
            this.setState({
                component2: m.default
            });
        });
    }

    handleComponent3Button(name) {
        return () => {
            System.import('component3-loader').then((m) => {
                this.setState({
                    [name]: m.Loader
                });
            });
        }
    }

    render () {
        return (
            <div>
                <h1>Host (mt4)</h1>
                <fieldset className="bundle-fieldset">
                    <legend>Component Showcase:</legend>
                    <ul>
                        <li>Component 1 (Static Import): <Component1/></li>
                        <li>
                            <button onClick={this.handleComponent2Button}>Show Component 2</button>
                            {this.state.component2 == null?null:<div>Component 2 (Lazy Import): <this.state.component2/></div>}
                        </li>
                        <li>
                            <button onClick={this.handleComponent3Button('component3Accordion')}>Show Component 3 - Accordion</button>
                            {this.state.component3Accordion == null?null:<div>Component 3 Accordion (Component Registry): <this.state.component3Accordion package="component3-package2" component="Accordion"/></div>}
                        </li>
                        <li>
                            <button onClick={this.handleComponent3Button('component3Carousel')}>Show Component 3 - Carousel</button>
                            {this.state.component3Carousel == null?null:<div>Component 3 Carousel (Component Registry): <this.state.component3Carousel package="component3-package1" component="Carousel"/></div>}
                        </li>
                        <li>
                            <button onClick={this.handleComponent3Button('component3Hint')}>Show Component 3 - Hint</button>
                            {this.state.component3Hint == null?null:<div>Component 3 Hint (Component Registry): <this.state.component3Hint package="component3-package2" component="Hint"/></div>}
                        </li>
                        <li>
                            <button onClick={this.handleComponent3Button('component3Email')}>Show Component 3 - Email</button>
                            {this.state.component3Email == null?null:<div>Component 3 Email (Component Registry): <this.state.component3Email package="component3-package1" component="Email"/></div>}
                        </li>
                        <li>
                            <button onClick={this.handleComponent3Button('component3Accordion2')}>Show Component 3 - Accordion2</button>
                            {this.state.component3Accordion2 == null?null:<div>Component 3 Accordion2 (Component Registry): <this.state.component3Accordion2 package="component3-package2" component="Accordion"/></div>}
                        </li>
                    </ul>
                </fieldset>
            </div>);
    }
}