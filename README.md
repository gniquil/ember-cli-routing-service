# Ember-cli-routing-service

Transition routes in your components with no magic.

## Usage

```
ember install ember-cli-routing-service
```

Once installed, in your `application` route:

```javascript
import TransitionToListenerRoute from 'ember-cli-routing-service/routes/transition-to-listener';

export default TransitionToListenerRoute.extend({
  ...
})
```

And now you are ready to transition routes in components:

```javascript
// some component

export default Ember.Component.extend({
  routing: Ember.inject.service(),

  someFunc () {
    this.get('routing').transitionTo('some-other-route', 'some-model-or-id');
  }
});
```

The `transitionTo` method on the routing service has the exact same signature as
you would find in normal routes.

## How It Works

Super simple and a bit hacky. We create a service called `routing` that mixes in
`Ember.Evented`. When you call `transitionTo`, we simply trigger an event on the
service and forwards all the arguments to the listener.

The `TransitionToListenerRoute` simply sets up a listener for the event on `init`.

## Embed rather than Inherit

If for any reason you don't want to directly inherit from the `TransitionToListenerRoute`,
you can also do the following:

```javascript
// in app/routes/application.js

import Ember from 'ember';
import TransitionToListenerMixin from '../mixins/transition-to-listener';

export default Ember.Route.extend(TransitionToListenerMixin, {
  init: function() {
    this._super.apply(this, arguments);
    this.setupTransitionToListener();
  }
});

```

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
