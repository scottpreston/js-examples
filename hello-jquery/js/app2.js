$(document).ready(function () {

    $.getJSON('/data.json').done(function (data) {
        var out = "<p>hello world</p>";
        out += "<table><tr><th>Name</th><th>Email</th></tr>";
        data.list.forEach(function (obj) {
            out += "<tr><td>" + obj.name + "</td><td>" + obj.email
                + "</td></tr>"
        });
        out += "</table>";
        $("#helloDiv").html(out);
    });

});
