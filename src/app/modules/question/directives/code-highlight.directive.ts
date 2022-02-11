import { Directive } from '@angular/core';

import hljs from 'highlight.js/lib/core';


import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
import css from 'highlight.js/lib/languages/css';
import sql from 'highlight.js/lib/languages/sql';
import php from 'highlight.js/lib/languages/php';
import xml from 'highlight.js/lib/languages/xml';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('xml', xml);
hljs.registerLanguage('css', css);
hljs.registerLanguage('php', php);
hljs.registerLanguage('sql', sql);

hljs.configure({
  languages: ['javascript', 'typescript', 'sql', 'xml', 'css', 'php'],
});

@Directive({
  selector: '[appCodeHighlight]',
})
export class CodeHighlightDirective {
  constructor() {}
}
