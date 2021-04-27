import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <h1>ForRoot / For Child Pattern</h1>
    <main>
      <router-outlet></router-outlet>
      <button routerLink="/lazy">Load Lazy</button>
      <button routerLink="/">Normal</button>
    </main>
  `,
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "demo";
}
