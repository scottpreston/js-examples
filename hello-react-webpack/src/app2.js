import React from 'react';
import ReactDOM from 'react-dom';

class HelloMessage extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

class Table extends React.Component {

    constructor(props) {
        super(props);
        this.state = {names:[]};
        this.generateHeaders = this.generateHeaders.bind(this);
        this.generateRows = this.generateRows.bind(this);
    }

    componentDidMount() {
        // load data 
        const jq = require('jquery');
        jq.getJSON('./data.json', ((data) => this.setState({names:data.list})));
    }

    render() {
        var headerComponents = this.generateHeaders();
        var rowComponents = this.generateRows();
        return (
            <table>
                <thead> {headerComponents} </thead>
                <tbody> {rowComponents} </tbody>
            </table>
        );
    }
    generateHeaders() {
        var cols = ['Name', 'Email'];
        // generate our header (th) cell components
        return cols.map(function(item) {
            return <th> {item} </th>;
        });
    }

    generateRows() {
        var cell = function(item,col) {
          return <td> {item[col]} </td>;
        };
        return this.state.names.map(function (item) {
          return <tr> {cell(item,'name')} {cell(item,'email')}  </tr>;
        });
    }
}

ReactDOM.render(<HelloMessage name="World" />, document.querySelector("#helloDiv"));
ReactDOM.render(<Table/>, document.querySelector("#nameTable"));