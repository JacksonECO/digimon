import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { DigimonService } from 'src/app/core/services/digimon.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {

  name: string = '';

  constructor(private service: DigimonService, private navigator: NavController, private toastController: ToastController) { }
  ngOnInit() { }

  async search() {
    if (this.name == '') {
      const toast = await this.toastController.create({
        message: 'Digite o nome do Digimon!',
        duration: 1500,
        position: 'bottom'
      });
      await toast.present();
      return;
    }

    var response = await this.service.searchDigimon(this.name);
    console.log(response);
    if (response) {
      this.navigator.navigateForward('search', {
        state: {
          listDigimon: response
        }
      });
    } else {
      const toast = await this.toastController.create({
        message: this.name + ' não encontrado!',
        duration: 1500,
        position: 'bottom'
      });
      await toast.present();
    }

  }

}
