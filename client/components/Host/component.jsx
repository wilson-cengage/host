import React from 'react';
import { Header as Component1HeaderFromBundle } from 'component1';
import Component1HeaderFromSource from 'component1/client/components/Header';

import { Header as Component2HeaderFromBundle } from 'component2';
import Component2HeaderFromSource from 'component2/client/components/Header';

import './style.css';

export default class Host extends React.Component {

    render () {
        return (
            <div>
                <h1>Host Container (mt4)</h1>
                <fieldset className="bundle-fieldset">
                    <legend>From Component Bundle:</legend>
                    <ul>
                        <li><Component1HeaderFromBundle/></li>
                        <li><Component2HeaderFromBundle/></li>
                    </ul>
                </fieldset>
                <fieldset className="bundle-fieldset">
                    <legend>From Component Source:</legend>
                    <ul>
                        <li><Component1HeaderFromSource/></li>
                        <li><Component2HeaderFromSource/></li>
                    </ul>
                </fieldset>
            </div>);
    }
}