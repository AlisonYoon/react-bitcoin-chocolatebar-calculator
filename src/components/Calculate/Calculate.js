import React from 'react';

class Calculate extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            rate : '',
            freddos : ''
        }

    }

    componentDidMount() {
        this.intervalId = setInterval(() => this.fetchApi(), 1000);
        this.fetchApi()
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    fetchApi() {
        fetch('https://api.coindesk.com/v1/bpi/currentprice/gbp.json')
            .then(data => {return data.json()})
            .then(data => {
                this.setState({
                    rate: parseFloat(data.bpi.GBP.rate_float).toFixed(2),
                    freddos : parseFloat(data.bpi.GBP.rate_float/0.25).toFixed(0)
                })
            })
    }

    render() {
        return (
            <div>
                <h1>1 Bitcoin = £ {this.state.rate} </h1>
                <h1>that's {this.state.freddos} Freddo bars </h1>
            </div>
        )
    }
}

export default Calculate