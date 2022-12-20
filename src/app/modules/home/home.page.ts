import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DigimonService } from '../../core/services/digimon.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private service: DigimonService, private navigator: NavController) { }

  async searchAll() {
    var response = await this.service.allDigimon();
    console.log(response);
    if (response) this.navigator.navigateForward('search', {
      state: {
        listDigimon: response
      }
    });
  }

}
