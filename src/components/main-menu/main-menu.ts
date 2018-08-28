import { Component } from '@angular/core';
import { UiServiceProvider } from '../../providers/ui-service/ui-service';
import { UICOMPONENTS } from '../../enums/enums';
/**
 * Generated class for the MainMenuComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'main-menu',
  templateUrl: 'main-menu.html'
})
export class MainMenuComponent {

  text: string;

  constructor(private uiService:UiServiceProvider) {
    console.log('Hello MainMenuComponent Component');
    this.text = 'Hello World';
  }

  openInvoice(){
    this.uiService.selectedUI = UICOMPONENTS.CUSTOMERINVOICE;
  }
}
