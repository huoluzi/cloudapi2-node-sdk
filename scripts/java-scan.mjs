// Lexical inventory, not a Java compiler. Keep positions/newlines for evidence.
export function maskJava(source) {
  return source.replace(/\/\*[\s\S]*?\*\/|\/\/[^\r\n]*|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'/g,
    token => token.replace(/[^\r\n]/g, ' '));
}

export function scanPublicMethods(source, wantedDepth = 1) {
  const masked = maskJava(source);
  const depths = new Uint32Array(masked.length + 1);
  let depth = 0;
  for (let i = 0; i < masked.length; i++) {
    depths[i] = depth;
    if (masked[i] === '{') depth++;
    if (masked[i] === '}') depth--;
  }
  const pattern = /\bpublic\s+([^{};()=]+?)\s+([\w$]+)\s*\(([^()]*)\)\s*(?:throws\s+[\w.,\s]+)?\s*[{;]/g;
  const methods = [];
  for (const match of masked.matchAll(pattern)) {
    if (depths[match.index] !== wantedDepth) continue;
    const declaration = source.slice(match.index, match.index + match[0].length - 1).replace(/\s+/g, ' ').trim();
    const modifiersAndType = match[1].trim().split(/\s+/);
    const modifiers = [];
    while (/^(static|synchronized|final|abstract|native|default)$/.test(modifiersAndType[0])) {
      modifiers.push(modifiersAndType.shift());
    }
    const returnType = modifiersAndType.join(' ');
    if (!returnType || /\b(class|interface|enum)\b/.test(returnType)) continue;
    methods.push({
      name: match[2], returnType, modifiers,
      parameters: match[3].replace(/\s+/g, ' ').trim(), declaration,
      line: source.slice(0, match.index).split('\n').length,
      kind: /^cancelListen|^unsubscribe/.test(match[2]) ? 'cancel' :
        /^listen|^subscribe/.test(match[2]) ? 'subscription' :
        /Callback/.test(match[3]) ? 'callback-operation' : 'synchronous',
    });
  }
  return methods;
}

export function scanCallbacks(source) {
  const masked = maskJava(source);
  const output = [];
  for (const match of masked.matchAll(/public\s+interface\s+(\w+)\s*\{/g)) {
    const start = match.index + match[0].length;
    let end = start, depth = 1;
    for (; end < masked.length && depth; end++) {
      if (masked[end] === '{') depth++;
      if (masked[end] === '}') depth--;
    }
    const body = masked.slice(start, end - 1);
    const call = /void\s+(\w+)\s*\(([^)]*)\)/.exec(body);
    output.push({ name: match[1], line: source.slice(0, match.index).split('\n').length,
      method: call?.[1] ?? null, parameters: call?.[2].replace(/\s+/g, ' ').trim() ?? null });
  }
  return output;
}
