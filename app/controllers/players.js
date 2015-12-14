import Ember from 'ember';
var inject = Ember.inject;

export default Ember.Controller.extend({
  football: inject.service(),
  players: [],
  team : {},
  setup: function () {
    var selectedTeam =this.get('football').get("selectedTeam");
    if (!selectedTeam.name) {
      this.transitionToRoute("teams");
      return;
    }
  }.on("init")

});
