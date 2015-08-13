import Ember from 'ember';

export default Ember.Mixin.create({
  routing: Ember.inject.service(),

  setupTransitionToListener: function() {
    const route = this;
    route.get('routing').on('transitionTo', function(args) {
      route.transitionTo.apply(route, args);
    });
  }
});
