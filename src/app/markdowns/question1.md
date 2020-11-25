```
import { Component, Input } from '@angular/core';

@Component({
  selector: 'welcome',
  template: `<h1>Welcome to {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class WelcomeComponent  {
  @Input() name: string;
}
```