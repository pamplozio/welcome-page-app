import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss'],
})
export class WelcomePageComponent {
  showLoginTab = true; // Reserved for custom tab toggle logic

  /**
   * Logic to programmatically toggle between Sign Up and Login tabs
   */
  toggleTabs(showLogin: boolean): void {
    this.showLoginTab = showLogin;
  }
}
