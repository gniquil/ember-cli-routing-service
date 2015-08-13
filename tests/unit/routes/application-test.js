import { moduleFor, test } from 'ember-qunit';

moduleFor('route:application', 'Unit | Route | application', {
  // Specify the other units that are required for this test.
  needs: ['service:routing']
});

test('it exists', function(assert) {
  assert.expect(2);

  var applicationRoute = this.subject();

  applicationRoute.transitionTo = function() {
    var args = Array.prototype.slice.call(arguments);
    assert.equal(args[0], 'some-route');
    assert.equal(args[1], 'model-id');
  };

  applicationRoute.get('routing').transitionTo('some-route', 'model-id');
});
