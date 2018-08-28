
import { Injectable } from '@angular/core';
import { UICOMPONENTS } from '../../enums/enums';

/*
  Generated class for the UiServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UiServiceProvider {

  public selectedUI:UICOMPONENTS = UICOMPONENTS.MAINMENU;

  constructor() {
    console.log('Hello UiServiceProvider Provider');
  }

}
