export function svgToUrl(svgString: string): string {
  const svgBase64 = btoa(unescape(encodeURIComponent(svgString)));
  return `data:image/svg+xml;base64,${svgBase64}`;
}
