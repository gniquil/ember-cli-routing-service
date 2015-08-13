import Ember from 'ember';
import TransitionToListenerMixin from '../mixins/transition-to-listener';

export default Ember.Route.extend(TransitionToListenerMixin, {
  init: function() {
    this._super.apply(this, arguments);
    this.setupTransitionToListener();
  }
});
