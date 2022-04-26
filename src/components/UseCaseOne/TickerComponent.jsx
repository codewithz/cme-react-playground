import React, { Component } from 'react'

export default class TickerComponent extends Component {

    state = {
        tickerCount: 0
    }

    componentDidMount() {
        console.log("Component Did Mount")
        this.timer = setInterval(this.tick, 1000)
    }

    componentDidUpdate() {
        console.log("Component Did Update")
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    tick = () => {
        this.setState({
            tickerCount: this.state.tickerCount + 1
        })
    }


    render() {
        return (
            <div>
                <h3>Ticker Component- CLass Lifecycle method</h3>

                Time Elapsed: {this.state.tickerCount}
                <br />
                <br />
            </div>
        )
    }
}
