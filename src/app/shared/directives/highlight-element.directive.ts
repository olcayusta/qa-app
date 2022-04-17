import { AfterViewInit, Directive, ElementRef } from '@angular/core';

import hljs from 'highlight.js/lib/core';

import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
import php from 'highlight.js/lib/languages/php';
import python from 'highlight.js/lib/languages/python';
import sql from 'highlight.js/lib/languages/sql';
import css from 'highlight.js/lib/languages/css';
import json from 'highlight.js/lib/languages/json';
import bash from 'highlight.js/lib/languages/bash';
import xml from 'highlight.js/lib/languages/xml';

hljs.registerLanguage('js', javascript);
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('css', css);
hljs.registerLanguage('php', php);
hljs.registerLanguage('sql', sql);
hljs.registerLanguage('python', python);
hljs.registerLanguage('bash', bash);
hljs.registerLanguage('json', json);
hljs.registerLanguage('xml', xml);

hljs.configure({
  languages: ['xml', 'javascript', 'typescript', 'sql', 'xml', 'css', 'php', 'python', 'bash', 'json'],
  ignoreUnescapedHTML: true
});

@Directive({
  selector: '[qaHighlightElement]'
})
export class HighlightElementDirective implements AfterViewInit {
  constructor(private elementRef: ElementRef<HTMLElement>) {}

  ngAfterViewInit() {
    this.elementRef.nativeElement.querySelectorAll('pre').forEach(async (block: HTMLElement) => {
      const code = block.querySelector('code') as HTMLElement;
      hljs.highlightElement(code);

      const languageName = code.classList[0]?.split('-')[1];
      // console.log(languageName);

      /*      if (languageName) {
        switch (languageName) {
          case 'js':
            const { default: javascript } = await import('highlight.js/lib/languages/javascript');
            hljs.registerLanguage('javascript', javascript);
            break;
          case 'typescript':
            const { default: typescript } = await import('highlight.js/lib/languages/typescript');
            hljs.registerLanguage('typescript', typescript);
            break;
          case 'css':
            const { default: css } = await import('highlight.js/lib/languages/css');
            hljs.registerLanguage('css', css);
            break;
          case 'xml':
          case 'html':
            const { default: xml } = await import('highlight.js/lib/languages/xml');
            hljs.registerLanguage('html', xml);
            break;
          case 'json':
            const { default: json } = await import('highlight.js/lib/languages/json');
            hljs.registerLanguage('json', json);
            break;
        }

        hljs.highlightElement(code);
      }*/

      /*      const { default: detectLang } = await import('highlight.js/lib/languages/' + languageName);
            hljs.registerLanguage(detectLang, detectLang);

            hljs.highlightElement(code);*/

      // console.log('getLanguage: ', hljs.getLanguage(languageName));
      /*      if (hljs.getLanguage(languageName)) {
        console.log('var');
      } else {
        import('highlight.js/lib/languages/javascript').then((lang) => {
          hljs.registerLanguage('javascript', lang.default);
          hljs.highlightElement(code);
        });
      }*/
    });
  }
}
