import React, { Component } from "react";

export default class Timer extends Component {
    state = {
        timer: 0,
        backward: false
    }
    tick = () => {
        let { timer, backward } = this.state;
        let next;
        if (backward === true) {
            next = timer - 1;
        } else {
            next = timer + 1;
        }
        if (next === 10 || next === 0) {
            backward = next === 10;
            this.setState({ timer: next, backward })
        } else {
            this.setState({ timer: next })
        }
    }



    componentDidMount() {
        this.interval = setInterval(this.tick, 1000);

    }

    handleKeyPress = (e) => {
        if (e.charCode === 13) {
            this.setState({ 
                timer:parseInt(e.target.value ),
            })
        }


        console.log(e.target.value);

    }

 


    render() {
        return (
            <div>
                <input onKeyPress={this.handleKeyPress}    />
                <br />
                {this.state.timer}
            </div>
        )
    }
}