import { moduleFor, test } from 'ember-qunit';

moduleFor('service:routing', 'Unit | Service | routing', {
  // Specify the other units that are required for this test.
  // needs: ['service:foo']
});

// Replace this with your real tests.
test('it exists', function(assert) {
  assert.expect(3);

  var routingService = this.subject();

  routingService.on('transitionTo', function(args) {
    assert.equal(args.length, 2);
    assert.equal(args[0], 'some-route');
    assert.equal(args[1], 'model-id');
  });

  routingService.transitionTo('some-route', 'model-id');
});
