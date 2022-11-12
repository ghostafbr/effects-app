import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import {NavbarComponent} from "./shared/navbar/navbar.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule, NavbarComponent, RouterOutlet],
})
export class AppComponent {
  title = 'http-effects';
}
