/** "https://www.example.com/path" → "example.com" */
export const hostname = (url: string) => new URL(url).host.replace(/^www\./, '');
