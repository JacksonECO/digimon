import { Component } from '@angular/core';
import { DigimonService } from '../search/services/digimon.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private service: DigimonService) { }

  async searchAll() {
    var response = await this.service.allDigimon();
    console.log(response);
  }
}
