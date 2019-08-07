import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | employee/home', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:employee/home');
    assert.ok(route);
  });
});
