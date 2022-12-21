import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Digimon } from '../interfaces/digimon';


@Injectable({
  providedIn: 'root'
})
export class DigimonService {

  constructor(private http: HttpClient) { }

  async allDigimon() {
    const url = 'https://digimon-api.vercel.app/api/digimon';
    var listDigimon = await this.http.get(url).toPromise().then((response: any) => {
      if (response.length == 0) return null;

      var list = new Array<Digimon>();
      response.forEach((element: Digimon) => {
        list.push(element);
      });

      return list;
    }).catch(error => {
      console.log(error);
      return null;
    });

    return listDigimon;
  }

  async searchDigimon(digimon: string) {
    const url = 'https://digimon-api.vercel.app/api/digimon/name/' + digimon;
    var resp = await this.http.get(url).toPromise().then((response: any) => {

      if (response.length != 0) {
        return response;
      }
      return null;
    }).catch(error => {
      console.log(error);
      return null;
    });

    return resp;
  }

  async searchDigimonLevel(digimonLevel: string) {
    const url = 'https://digimon-api.vercel.app/api/digimon/level/' + digimonLevel;
    var listDigimon = await this.http.get(url).toPromise().then((response: any) => {
      if (response.length == 0) return null;

      var list = new Array<Digimon>();
      response.forEach((element: Digimon) => {
        list.push(element);
      });

      return list;
    }).catch(error => {
      console.log(error);
      return null;
    });

    return listDigimon;
  }
}
