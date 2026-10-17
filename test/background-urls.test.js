import { test } from 'node:test';
import assert from 'node:assert/strict';
import { extractBackgroundUrls } from '../ImageSave/background-urls.js';

const PAGE = 'https://site.com/blog/post';

test('none yields no URLs', () => {
  assert.deepEqual(extractBackgroundUrls('none', PAGE), []);
});

test('a single absolute url() yields that URL', () => {
  assert.deepEqual(
    extractBackgroundUrls('url("https://a.com/x.png")', PAGE),
    ['https://a.com/x.png'],
  );
});

test('multiple backgrounds yield every URL in order', () => {
  assert.deepEqual(
    extractBackgroundUrls('url("https://a.com/x.png"), url("https://a.com/y.png")', PAGE),
    ['https://a.com/x.png', 'https://a.com/y.png'],
  );
});

test('gradients are ignored', () => {
  assert.deepEqual(
    extractBackgroundUrls('linear-gradient(rgb(255, 0, 0), rgb(0, 0, 255)), url("https://a.com/y.png")', PAGE),
    ['https://a.com/y.png'],
  );
});

test('relative URLs resolve against the page URL', () => {
  assert.deepEqual(
    extractBackgroundUrls('url("img/x.png"), url("/y.png"), url("//cdn.com/z.png")', PAGE),
    ['https://site.com/blog/img/x.png', 'https://site.com/y.png', 'https://cdn.com/z.png'],
  );
});

test('data: URLs are returned unchanged', () => {
  const data = 'data:image/png;base64,iVBORw0KGgo+/A==';
  assert.deepEqual(extractBackgroundUrls(`url("${data}")`, PAGE), [data]);
});

test('parentheses, spaces and escaped quotes stay inside the URL', () => {
  assert.deepEqual(
    extractBackgroundUrls(String.raw`url("https://a.com/a (1).png"), url("https://a.com/say\"hi\".png")`, PAGE),
    ['https://a.com/a%20(1).png', 'https://a.com/say%22hi%22.png'],
  );
});

test('an unparsable URL is skipped without dropping the others', () => {
  assert.deepEqual(
    extractBackgroundUrls('url("http://[bad"), url("https://a.com/x.png")', PAGE),
    ['https://a.com/x.png'],
  );
});

test("the extension's own assets are skipped", () => {
  assert.deepEqual(
    extractBackgroundUrls('url("chrome-extension://abc/pointer.png"), url("https://a.com/x.png")', PAGE),
    ['https://a.com/x.png'],
  );
});
