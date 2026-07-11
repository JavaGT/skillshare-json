import assert from 'node:assert';
import { describe, it } from 'node:test';
import { extractBootstrap, getClass } from './index.mjs';

describe('extractBootstrap', () => {
  it('should extract SS.serverBootstrap JSON from HTML', () => {
    const html = '<html><body><script>SS.serverBootstrap = {"classId":123,"title":"Test Class"};\n</script></body></html>';
    const result = extractBootstrap(html);
    assert.deepStrictEqual(result, { classId: 123, title: 'Test Class' });
  });

  it('should throw clear error when bootstrap JSON is missing', () => {
    assert.throws(() => extractBootstrap('<html></html>'), {
      message: 'Could not find SS.serverBootstrap JSON on the page'
    });
  });
});

describe('getClass', () => {
  it('should be a function', () => {
    assert.strictEqual(typeof getClass, 'function');
  });
});
