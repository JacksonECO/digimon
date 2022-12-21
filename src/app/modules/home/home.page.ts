import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DigimonService } from '../../core/services/digimon.service';
import { Digimon } from '../../core/interfaces/digimon';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  dropValue: string = 'Todos';

  constructor(private service: DigimonService, private navigator: NavController) { }

  async search() {
    var response: Array<Digimon> | null = [];
    var title: string = 'Digimon';

    console.log(this.dropValue);

    if (this.dropValue == 'Todos') {
      response = await this.service.allDigimon();
    } else {
      title = this.dropValue;
      response = await this.service.searchDigimonLevel(this.dropValue);
    }

    console.log(response);
    if (response) this.navigator.navigateForward('search', {
      state: {
        listDigimon: response,
        title: title
      }
    });
  }

  changeDropValue(event: any) {
    this.dropValue = event.detail.value;
  }

}
