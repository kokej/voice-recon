import { browser, by, element } from 'protractor';

export class DebugPage {
  navigateTo() {
    return browser.get('/debug');
  }

  getTitleText() {
    return element(by.css('app-debug p')).getText();
  }
}
