import { AfterViewInit, Directive, ElementRef } from '@angular/core';

import hljs from 'highlight.js/lib/core';

import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
import css from 'highlight.js/lib/languages/css';
import sql from 'highlight.js/lib/languages/sql';
import php from 'highlight.js/lib/languages/php';
import xml from 'highlight.js/lib/languages/xml';
import cos from 'highlight.js/lib/languages/cos';

hljs.registerLanguage('js', javascript);
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('xml', xml);
hljs.registerLanguage('css', css);
hljs.registerLanguage('php', php);
hljs.registerLanguage('sql', sql);
hljs.registerLanguage('cos', cos);

hljs.configure({
  languages: ['javascript', 'typescript', 'sql', 'xml', 'css', 'php', 'cos'],
  ignoreUnescapedHTML: true
});

@Directive({
  selector: '[qaHighlightElement]'
})
export class HighlightElementDirective implements AfterViewInit {
  constructor(private elementRef: ElementRef<HTMLElement>) {}

  ngAfterViewInit() {
    this.elementRef.nativeElement.querySelectorAll('pre').forEach((block: HTMLElement) => {
      const code = block.querySelector('code') as HTMLElement;
      hljs.highlightElement(code);
    });
  }
}
