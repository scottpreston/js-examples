var Table = React.createClass({
    render: function() {
        return <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
            </tr>
            </thead>
            <tbody>
            {this.props.list.map(function(obj, index){
                return <tr key={ index }><td>{obj.name}</td><td>{obj.email}</td></tr>;
            })}
            </tbody>
        </table>;
    }
});

$(document).ready(function () {
    $.getJSON('/data.json').done(function (data) {
        ReactDOM.render(
            <Table list={data.list} />,
            document.getElementById('nameTable')
        );

    });
});