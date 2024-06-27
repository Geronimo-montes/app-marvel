import { Component } from '@angular/core';
import { faHome, faCog, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.css',
})
export class PagesComponent {
  icons = { faCog, faHome, faUser };
}
