import React from 'react';
import { Header as Component1HeaderFromBundle } from 'component1';
import Component1HeaderFromSource from 'component1/client/components/Header';

import { Header as Component2HeaderFromBundle } from 'component2';
import Component2HeaderFromSource from 'component2/client/components/Header';

export default class Host extends React.Component {

    render () {
        return (
            <div>
                <h1>Host Container</h1>
                <fieldset>
                    <legend>Component 1</legend>
                    <ul>
                        <li>From Bundle: <Component1HeaderFromBundle/></li>
                        <li>From Source: <Component1HeaderFromSource/></li>
                    </ul>
                </fieldset>
                <fieldset>
                    <legend>Component 2</legend>
                    <ul>
                        <li>From Bundle: <Component2HeaderFromBundle/></li>
                        <li>From Source: <Component2HeaderFromSource/></li>
                    </ul>
                </fieldset>
            </div>);
    }
}