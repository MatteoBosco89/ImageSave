# ES modules without a bundler

Status: accepted (2026-10-11)

## Context

Pure logic (zip writer, background-image parser) must run both in the extension and in Node tests. There is no build step, and content scripts cannot use static `import`. The alternative considered was classic scripts sharing the global scope, loaded in Node tests through `node:vm`.

## Decision

Pure logic lives in ES modules. The popup loads them with `<script type="module">`; the content script loads them with `import(chrome.runtime.getURL('...'))`; Node tests import them directly. No bundler.

## Consequences

- Every module the content script imports must be listed in `web_accessible_resources`, which makes it readable by any web page. This is intentional and harmless for pure code; never put secrets or privileged logic in those modules, and do not remove them from the list or the content script breaks.
- Modules must not touch `chrome.*` or the DOM, so they stay importable in Node.
