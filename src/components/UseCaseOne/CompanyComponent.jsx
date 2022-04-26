import React, { Component } from 'react'

export default class CompanyComponent extends Component {

    state = {
        company: 'CME',
        countryOfOrigin: 'USA'
    }

    changeCompany = () => {
        // alert("I am clicked")
        this.setState(
            {
                company: 'CME Group'
            }
        )
    }

    render() {
        return (
            <div>
                <h4>CompanyComponent- State from Class Component</h4>

                Company Name: {this.state.company}
                <br />
                Country of Origin: {this.state.countryOfOrigin}

                <br />
                <button onClick={this.changeCompany}>Change Name</button>
                <br /><br />

            </div>
        )
    }
}
