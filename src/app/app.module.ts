import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";

import { MarkdownRendererComponent } from "./controls/markdown-renderer.component";
import { HighlightDirective } from "./directives/highlight.directive";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    MarkdownRendererComponent,
    HighlightDirective
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
