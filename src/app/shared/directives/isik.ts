import javascript from 'highlight.js/lib/languages/javascript';
import js from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
import php from 'highlight.js/lib/languages/php';
import python from 'highlight.js/lib/languages/python';
import sql from 'highlight.js/lib/languages/sql';
import css from 'highlight.js/lib/languages/css';
import json from 'highlight.js/lib/languages/json';
import bash from 'highlight.js/lib/languages/bash';
import xml from 'highlight.js/lib/languages/xml';
import hljs from 'highlight.js/lib/core';

/*function loadLanguageFn() {
  const languageName = code.classList[0]?.split('-')[1].toLowerCase();
  const languageFn = await getLanguageFn(languageName);
  hljs.registerLanguage(languageName, languageFn);
  hljs.highlightElement(code);
}*/

export async function getLanguageFn(languageName: any) {
  let l;
  switch (languageName) {
    case 'bash':
      l = await import('highlight.js/lib/languages/bash');
      break;
    case 'php':
      l = await import('highlight.js/lib/languages/php');
      break;
    case 'sql':
      l = await import('highlight.js/lib/languages/sql');
      break;
    case 'js':
      l = await import('highlight.js/lib/languages/javascript');
      break;
    case 'javascript':
      l = await import('highlight.js/lib/languages/javascript');
      break;
    case 'typescript':
      l = await import('highlight.js/lib/languages/typescript');
      break;
    case 'css':
      l = await import('highlight.js/lib/languages/css');
      break;
    case 'xml':
    case 'html':
      l = await import('highlight.js/lib/languages/xml');
      break;
    case 'json':
      l = await import('highlight.js/lib/languages/json');
      break;
    case 'python':
      l = await import('highlight.js/lib/languages/python');
      break;
  }

  // @ts-ignore
  return l.default;
}
