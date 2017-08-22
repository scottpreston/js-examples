import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import reducer from './reducer';

// always takes reducer
const store = createStore(reducer, {names:[]});

class HelloMessage extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

class Table extends React.Component {

    constructor(props) {
        super(props);
        this.render = this.render.bind(this);
        this.props.store.subscribe(()=>{
            this.setState({a:1});
        });
    }

    componentDidMount() {
        // load data 
        const jq = require('jquery');
        jq.getJSON('./data.json', ((data) => this.props.store.dispatch({ type: 'LOAD' , 
        names: data.list})));
    }

    render() {
        // generate our header (th) cell components
        let cols =  ['Name', 'Email'].map(function(item) {
            return (<th>{item}</th>);
        });
        let names = this.props.store.getState().names;
        // let names2 = [{name:'foo bar', email:'foo@bar.com'}];
        console.log(names);
        let rows = names.map(function (item) {
          return (
          <tr><td>{item.name}</td><td>{item.email}</td></tr>);
        });
        return (
            <table>
                <thead><tr>{cols}</tr></thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
}

ReactDOM.render(<HelloMessage name="World" />, document.querySelector("#helloDiv"));
ReactDOM.render(<Table store={store}/>, document.querySelector("#nameTable"));


store.subscribe(()=>{
    ReactDOM.render(<Table store={store}/>, document.querySelector("#nameTable"));
});