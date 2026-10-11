# No external libraries

Status: accepted (2026-10-11)

## Context

The 2018 extension depended on jQuery and zip.js, but neither was ever committed, so a clean clone could not run. Restoring them meant vendoring an old zip.js API that would be replaced anyway, and keeping jQuery only for DOM calls the platform now covers natively.

## Decision

ImageSave ships no third-party code. DOM work uses plain DOM APIs; the zip archive is produced by our own writer (STORE method, CRC32, central directory, no ZIP64). Images are already compressed, so DEFLATE would gain almost nothing; if it is ever needed, the native `CompressionStream('deflate-raw')` covers it without a library.

## Consequences

- Nothing to vendor, pin or audit; the extension runs from a clean clone.
- We own the zip format's correctness: it is checked by `node:test` against an independent reader (Python's `zipfile.testzip()`).
- Archive ceiling: 4 GB total and 65,535 entries. Lifting it means adding ZIP64 records to our writer, not adopting a library.
- Proposals to "just use JSZip / jQuery" contradict this ADR and should supersede it explicitly.
