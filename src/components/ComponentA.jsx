import React from "react";

class ComponentA extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    increaseCount() {
        this.setState({count: this.state.count + 1});
    }

    componentDidMount() {
        console.log('Component A did mount');
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('Component A did update');
    }

    componentWillUnmount() {
        console.log('Component A will unmount")');
    }


    render() {
        return (
            <div>
                <h1 className="text-3xl font-bold underline">Component A</h1>
                <p>{this.state.count}</p>
                <button onClick={() => this.increaseCount()}>Increase
                </button>
            </div>
        );
    }
}

export default ComponentA;