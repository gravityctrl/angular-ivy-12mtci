import {
  Directive,
  Input,
  ElementRef,
  NgZone,
  AfterViewChecked,
  OnInit
} from "@angular/core";

declare var hljs: any;

@Directive({
  selector: "[appHighlight]"
})
export class HighlightDirective implements OnInit, AfterViewChecked {
  constructor(private elementRef: ElementRef, private zone: NgZone) {}

  ngOnInit(): void {
    hljs.configure({
      languages: ["cs"]
    });
  }

  ngAfterViewChecked() {
    const selector = "code";

    if (
      this.elementRef.nativeElement.innerHTML &&
      this.elementRef.nativeElement.querySelector
    ) {
      const codeElements = this.elementRef.nativeElement.querySelectorAll(
        selector
      );
      this.zone.runOutsideAngular(() => {
        for (const snippet of codeElements) {
          snippet.classList.add("csharp");
          hljs.highlightBlock(snippet);
        }
      });
    }
  }
}
