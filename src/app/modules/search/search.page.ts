import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DigimonService } from 'src/app/core/services/digimon.service';
import { Digimon } from './interfaces/digimon';
import { LevelDigimon } from './interfaces/level-digimon';

@Component({
  selector: 'search-page',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  listDigimon: Array<Digimon> = [];
  constructor(private route: ActivatedRoute, private router: Router, private service: DigimonService) {
    this.route.queryParams.subscribe(_ => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        this.updateListDigimon(this.router.getCurrentNavigation()!.extras.state?.['listDigimon']);
      }
    });

  }

  ngOnInit() {
    // if (this.listDigimon.length == 0) {
    //   this.listDigimon = [
    //     { "name": "Koromon", "img": "https://digimon.shadowsmith.com/img/koromon.jpg", "level": "In Training" as LevelDigimon },
    //     { "name": "Bukamon", "img": "https://digimon.shadowsmith.com/img/bukamon.jpg", "level": "In Training" as LevelDigimon },
    //     { "name": "Tokomon", "img": "https://digimon.shadowsmith.com/img/tokomon.jpg", "level": "In Training" as LevelDigimon },
    //     { "name": "Tentomon", "img": "https://digimon.shadowsmith.com/img/tentomon.jpg", "level": "Rookie" as LevelDigimon },
    //     { "name": "Palmon", "img": "https://digimon.shadowsmith.com/img/palmon.jpg", "level": "Fresh" as LevelDigimon },
    //     { "name": "Gomamon", "img": "https://digimon.shadowsmith.com/img/gomamon.jpg", "level": "Rookie" as LevelDigimon },
    //     { "name": "Patamon", "img": "https://digimon.shadowsmith.com/img/patamon.jpg", "level": "Ultimate" as LevelDigimon },
    //     { "name": "Kuwagamon", "img": "https://digimon.shadowsmith.com/img/kuwagamon.jpg", "level": "Champion" as LevelDigimon },
    //     { "name": "Greymon", "img": "https://digimon.shadowsmith.com/img/greymon.jpg", "level": "Champion" as LevelDigimon },
    //     { "name": "Shellmon", "img": "https://digimon.shadowsmith.com/img/shellmon.jpg", "level": "Mega" as LevelDigimon },
    //   ];
    // }
  }

  updateListDigimon(listDigimon: Array<Digimon>) {
    if (listDigimon.length > 25) {
      this.listDigimon = listDigimon.slice(0, 25);
      setTimeout(() => {
        this.listDigimon = listDigimon;
      }, 1000);
    } else {
      this.listDigimon = listDigimon;
    }
  }

  async newSearch(value: string) {
    var response = await this.service.searchDigimon(value);
    console.log(response);
    // TODO: Atualizar a lista de Digimons
  }



  listStar1(digimon: Digimon): Array<any> {
    switch (digimon.level) {
      case 'Fresh':
        return [];
      case 'In Training':
        return [1];
      case 'Rookie':
        return [1, 2];
      case 'Champion':
        return [1, 2, 3];
      case 'Ultimate':
        return [1, 2, 3, 4];
      case 'Mega':
        return [1, 2, 3, 4, 5];
      default:
        return [];
    }
  }
  listStar2(digimon: Digimon): Array<any> {
    switch (digimon.level) {
      case 'Fresh':
        return [1, 2, 3, 4, 5];
      case 'In Training':
        return [1, 2, 3, 4];
      case 'Rookie':
        return [1, 2, 3];
      case 'Champion':
        return [1, 2];
      case 'Ultimate':
        return [1];
      case 'Mega':
        return [];
      default:
        return [];
    }
  }

}
