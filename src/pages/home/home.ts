import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UiServiceProvider } from '../../providers/ui-service/ui-service';
import { UICOMPONENTS } from '../../enums/enums';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public uiComponent = UICOMPONENTS;

  constructor(public navCtrl: NavController, 
              public uiService:UiServiceProvider) {

  }

}
