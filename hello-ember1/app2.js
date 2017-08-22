App = Ember.Application.create();

App.Router.map(function () {
    this.resource('index', {path: '/'}, function () {
    });
});

App.IndexRoute = Ember.Route.extend({
    model: function () {
         return Ember.$.getJSON('/data.json');
    }
});
