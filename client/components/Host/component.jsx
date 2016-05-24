import React from 'react';
import { Header as Component1Header } from 'component1';

export default class Host extends React.Component {

    render () {
        return (
            <div>
                <h1>This is Host container</h1>
                <div>
                    <span>Putting Component 1 here...</span>
                    <li><Component1Header/></li>
                </div>
            </div>);
    }
}