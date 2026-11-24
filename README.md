# VTT Caption Transcript

Extract cue text from a WebVTT file for reading or editing.

Open `index.html` in a modern browser. Edit the sample inputs to update the result, then print or download it. Processing stays in the tab.

## Example

Input:

```text
WEBVTT

00:00:00.000 --> 00:00:02.000
Welcome everyone.
```

Expected output includes:

```text
Welcome everyone.
```

## Limitations

Use the input format shown in the worked example. The transformation runs in browser memory; export the result before closing the tab.

## Development

See [CONTRIBUTING.md](CONTRIBUTING.md) for setup and test commands, and the [changelog](CHANGELOG.md) for project history.

## License

[MIT License](LICENSE). Copyright (c) 2026 vtt-caption-transcript contributors.
