import { Component, VERSION } from "@angular/core";
const circle = require("./markdowns/question1.md") as string;

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;

  q1c1 = readme;
  q1a1 =
    '<welcome name="TestDome"></welcome> will display: "Welcome to TestDome!".';
  q1a2 = "<welcome></welcome> will display nothing.";
  q1a3 =
    "@NgModule({ declarations: [ WelcomeComponent ] }) export class WelcomeModule {} declares that the welcome component belongs to the welcome module.";
  q1a4 = '<hello name="{{ name }}"></hello> will display: "Welcome to name!".';
}
