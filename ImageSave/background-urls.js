// Computed styles serialize every url() as url("...") with `"` and `\` backslash-escaped
// (CSSOM "serialize a string"). Hex escapes are only used for control characters,
// which never occur in a real image URL, so they are not decoded.
const URL_TOKEN = /url\("((?:[^"\\]|\\.)*)"\)/g;

export function extractBackgroundUrls(value, baseUrl) {
    return [...value.matchAll(URL_TOKEN)]
        .map(m => URL.parse(m[1].replace(/\\(.)/g, '$1'), baseUrl))
        .filter(url => url && url.protocol !== 'chrome-extension:')
        .map(url => url.href);
}
