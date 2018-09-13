
import { Injectable } from '@angular/core';
import { UICOMPONENTS } from '../../enums/enums';
import { ToastController } from 'ionic-angular';

/*
  Generated class for the UiServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UiServiceProvider {

  public selectedUI:UICOMPONENTS = UICOMPONENTS.MAINMENU;

  constructor(private toastCtrl:ToastController) {
    console.log('Hello UiServiceProvider Provider');
  }

  displayToast(msg:string){
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000,
      position: 'top'
    });
  
    toast.present();
  }
}
