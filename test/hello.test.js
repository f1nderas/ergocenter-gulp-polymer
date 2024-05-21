import * as assert from 'assert';
import { JSDOM } from 'jsdom';

import HelloWorld from '../app/js/hello.js';

it('should use hostname from browser', function() {
  const { window } = new JSDOM(``, { url: 'http://test.com/', pretendToBeVisual: true });

  global.window = window;

  assert.ok(new HelloWorld().hostname == window.location.host)
});
