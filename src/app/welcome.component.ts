import { Component, Input } from "@angular/core";

@Component({
  selector: "welcome",
  template: `
    <h1>Welcome to {{ name }}!</h1>
  `
})
export class WelcomeComponent {
  @Input() name: string;
}

/*
QUESTION: Select the statements about its use (in another components template or module) that are correct.


*/