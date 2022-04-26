import React, { Component } from 'react'
import CompanyComponent from './CompanyComponent'
import CounterComponent from './CounterComponent'
import { HelloComponent } from './HelloComponent'
import { NameComponent } from './NameComponent'
import { NameFunctionalComponent } from './NameFunctionalComponent'
import TickerComponent from './TickerComponent'
export class UseCaseOneComponent extends Component {
    render() {
        return (
            <div>
                <center>
                    <h1>Use Case One Home</h1>
                    <hr />
                    <CounterComponent />
                    <br />
                    <h4>Simple Hello World</h4>
                    <HelloComponent />
                    <br />
                    <NameComponent name="CME" message="Learn Well" />
                    <br />
                    <NameComponent name="Zartab" message="Train Well" />
                    <br />
                    <NameFunctionalComponent name="Zartab" message="Train Well" />
                    <br />
                    <CompanyComponent />
                    <br />
                    <TickerComponent />
                </center>
            </div>
        )
    }
}