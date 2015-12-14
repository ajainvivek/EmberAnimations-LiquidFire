import Ember from 'ember';
var inject = Ember.inject;

export default Ember.Route.extend({
  football: inject.service(),
  setupController : function (controller, model) {
    var selectedTeam = this.get('football').selectedTeam;
    controller.set("team", selectedTeam);
    controller.set("players", []);
    this.get("football").getPlayers(selectedTeam._links.players.href).then(function (data) {
      controller.set("players", data);
    });
  }
});
