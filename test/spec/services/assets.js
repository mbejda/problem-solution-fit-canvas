'use strict';

describe('Service: assets', function () {

  // load the service's module
  beforeEach(module('brandApp'));

  // instantiate service
  var assets;
  beforeEach(inject(function (_assets_) {
    assets = _assets_;
  }));

  it('should do something', function () {
    expect(!!assets).toBe(true);
  });

});
