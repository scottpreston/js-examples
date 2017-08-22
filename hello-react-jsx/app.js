var Hello = React.createClass({
  render: function() {
    return <span>hello {this.props.name}</span>;
  }
});

ReactDOM.render(
    <Hello name="world" />,
    document.getElementById('helloDiv')
);
