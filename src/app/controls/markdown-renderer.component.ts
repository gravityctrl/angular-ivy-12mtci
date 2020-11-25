import { Component, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { Parser, HtmlRenderer } from 'commonmark';

@Component({
  selector: 'app-markdown-renderer',
  templateUrl: './markdown-renderer.component.html',
  styleUrls: ['./markdown-renderer.component.scss']
})
export class MarkdownRendererComponent implements OnChanges {
  private parser: Parser;
  private renderer: HtmlRenderer;

  html: string;

  @Input()
  markdown: string;

  constructor() {
    this.html = '';
    this.parser = new Parser();
    this.renderer = new HtmlRenderer();
  }

  ngOnChanges(changes: SimpleChanges): void {
    const markDownChange: SimpleChange = changes.markdown;
    if (markDownChange) {
      const parsed = this.parser.parse(markDownChange.currentValue);
      this.html = this.renderer.render(parsed);
    }
  }
}