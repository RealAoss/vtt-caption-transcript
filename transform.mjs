function fail(message) {
    throw new Error(message);
}
export function transform(s) {
    if (!s.trim()) fail('Enter some source text.');
    const blocks = s.replace(/^\uFEFF/, '').replaceAll('\r', '').split(/\n\s*\n/);
    if (!/^WEBVTT(?:\s|$)/.test(blocks[0])) fail('Expected a WebVTT header');
    const out = [];
    for (const b of blocks.slice(1)) {
        const l = b.split('\n');
        if (/^(NOTE|STYLE|REGION)(\s|$)/.test(l[0])) continue;
        const i = l.findIndex(v => /^\s*(?:\d+:)?\d{2}:\d{2}\.\d{3}\s+-->/.test(v));
        if (i >= 0) out.push(l.slice(i + 1).join(' ').replace(/<[^>]+>/g, ''))
    }
    return out.join('\n') || 'No timed cues.'
}
