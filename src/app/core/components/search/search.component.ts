import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DigimonService } from 'src/app/core/services/digimon.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {

  @Input() isHome: boolean = false;
  @Input() action: Function = () => { };

  name: string = '';

  constructor(private service: DigimonService, private navigator: NavController) { }
  ngOnInit() { }

  async search() {
    if (this.isHome) {
      var response = await this.service.searchDigimon(this.name);
      console.log(response);
      if (response)
        this.navigator.navigateForward('search', {
          state: {
            listDigimon: response
          }
        });

    } else {
      this.action(this.name);
    }
  }

}
