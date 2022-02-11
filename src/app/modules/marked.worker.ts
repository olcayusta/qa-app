/// <reference lib="webworker" />

import { marked } from 'marked';

addEventListener('message', ({ data }) => {
  const response = marked.parse(data);
  postMessage(response);
});
