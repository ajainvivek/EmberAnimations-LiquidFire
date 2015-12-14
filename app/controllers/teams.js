import Ember from 'ember';
var inject = Ember.inject;

export default Ember.Controller.extend({
  football: inject.service(),
  teams: [],
  init : function () {
    var self = this;
    var teams = this.get('football').getTeams();
    teams.then(function (data) {
      self.set("teams", data);
    });
  },
  actions : {
    goToPlayers : function (data) {
        this.get('football').set("selectedTeam", data);
        this.transitionToRoute("players");
    }
  }
});
