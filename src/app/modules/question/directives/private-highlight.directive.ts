import {
  AfterViewInit,
  ChangeDetectorRef,
  Directive,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewContainerRef,
} from '@angular/core';

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

import { DevsiteCodeComponent } from '../components/devsite-code/devsite-code.component';
import { SiteCodeComponent } from '@shared/components/site-code/site-code.component';

hljs.configure({
  languages: ['javascript', 'typescript', 'sql', 'xml', 'css', 'php', 'cos'],
});

@Directive({
  selector: '[appPrivateHighlight]',
})
export class PrivateHighlightDirective implements OnInit, AfterViewInit {
  @Input() appPrivateHighlight!: string;
  div: HTMLDivElement = this.renderer.createElement('div');

  elements: Element[] | undefined;

  constructor(
    private elementRef: ElementRef<HTMLPreElement>,
    private vcr: ViewContainerRef,
    private renderer: Renderer2,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {}

  test(): void {
    // @ts-ignore
    const lang = value.querySelector('code').className;
    if (lang) {
      // import detect language file and highlight
    } else {
      // auto detect
    }
  }

  async ngAfterViewInit(): Promise<void> {
    this.renderer.setProperty(this.div, 'innerHTML', this.appPrivateHighlight);


    const blocks = this.div.querySelectorAll('pre');
    blocks.forEach((value) => {
      const codeElement = value.querySelector('code') as HTMLElement;
      const lang = codeElement?.className.split('language-')[1];
      const language = hljs.getLanguage(lang);

      hljs.highlightElement(codeElement);

    });

    this.renderer.appendChild(this.elementRef.nativeElement, this.div);
    this.cd.detectChanges();
  }

  createComponent(value: HTMLPreElement) {
    // compRef.instance.lang = value.className.split(' ')[1];
  }
}
