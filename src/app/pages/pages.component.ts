import { Component } from '@angular/core';
import { faHome, faCog, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.css',
})
export class PagesComponent {
  icons = { faCog, faHome, faUser };

  currentYear = new Date().getFullYear();

  getFooterText(): string {
    return `&copy; ${new Date().getFullYear()} Marvel. Todos los derechos reservados. | <a href="#">Términos de uso</a> | <a href="#">Política de privacidad</a> | <a href="#">Cookies</a> | <a href="#">Aviso legal</a>`;
  }
}
