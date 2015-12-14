import Ember from 'ember';

export default Ember.Service.extend({
    authToken: "7e169fa1464e491388dd4259c084d890",
    getTeams: function () {
      var self = this;
      return new Ember.RSVP.Promise(function (resolve) {
        Ember.$.ajax({
          headers: { 'X-Auth-Token': self.get("authToken") },
          url: 'http://api.football-data.org/v1/soccerseasons/398/teams',
          dataType: 'json',
          type: 'GET',
        }).done(function(response) {
          resolve(response.teams);
        });
      });
    },
    getPlayers: function(url) {
      var self = this;
      return new Ember.RSVP.Promise(function (resolve) {
        Ember.$.ajax({
          headers: { 'X-Auth-Token': self.get("authToken") },
          url: url,
          dataType: 'json',
          type: 'GET',
        }).done(function(response) {
          resolve(response.players);
        });
      });
    },
    selectedTeam: {}
});
