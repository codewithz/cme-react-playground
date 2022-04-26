import React, { Component } from 'react'

export class NameComponent extends Component {

    render() {
        const name = this.props.name
        const message = this.props.message

        return (
            <div>
                <h3>Name Component- Class</h3>
                Hey my name is {name}
                <br />
                Message: {message}
            </div>
        )
    }
}