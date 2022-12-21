import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Digimon } from '../../core/interfaces/digimon';

@Component({
  selector: 'search-page',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  private listDigimonAll: Array<Digimon> = [];
  private counter: number = 0;
  private limit: number = 10;

  listDigimon: Array<Digimon> = [];
  title: string = 'Digimon';

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(_ => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        var state = this.router.getCurrentNavigation()!.extras.state;
        this.title = state?.['title'] ?? 'Digimon';
        this.updateListDigimon(state?.['listDigimon']);
      }
    });
  }

  ngOnInit() { }

  updateListDigimon(listDigimonNew: Array<Digimon>) {
    this.listDigimonAll = listDigimonNew;
    this.listDigimon = listDigimonNew.slice(this.counter, this.counter + this.limit);

    this.counter = this.counter + this.limit;
    this.limit = 30;
  }

  onIonInfinite(event: any) {
    if (this.counter < this.listDigimonAll.length) {
      if (this.counter + this.limit > this.listDigimonAll.length) {
        this.limit = this.listDigimonAll.length - this.counter;
      }

      this.listDigimon = this.listDigimon.concat(this.listDigimonAll.slice(this.counter, this.counter + this.limit));
      this.counter = this.counter + this.limit;
    }
    event.target.complete();
  }

  listStar1(digimon: Digimon | any): Array<any> {
    switch (digimon.level) {
      case 'Fresh':
        return [];
      case 'Training':
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
      case 'Armor':
        return [1, 2, 3, 4, 5, 6];
      default:
        return [];
    }
  }
  listStar2(digimon: Digimon | any): Array<any> {
    switch (digimon.level) {
      case 'Fresh':
        return [1, 2, 3, 4, 5];
      case 'Training':
      case 'In Training':
        return [1, 2, 3, 4];
      case 'Rookie':
        return [1, 2, 3];
      case 'Champion':
        return [1, 2];
      case 'Ultimate':
        return [1];
      case 'Armor':
      case 'Mega':
        return [];
      default:
        return [];
    }
  }

}
