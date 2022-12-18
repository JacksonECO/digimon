import { Component, Input, OnInit } from '@angular/core';
import { DigimonService } from 'src/app/modules/search/services/digimon.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {

  @Input() isHome: boolean = false;

  name: string = '';

  constructor(private service: DigimonService) { }
  ngOnInit() { }

  async search() {
    console.log(this.name);
    var response = await this.service.searchDigimon(this.name);
    console.log(response);
  }

}
