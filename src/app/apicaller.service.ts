import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import rxjs map
import { map, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApicallerService {
  apiStore = new Map();
  constructor(private _http: HttpClient) {}

  private getApiRequest(id) {
    return this._http
      .get('https://swapi.dev/api/people/' + id)
      .pipe(shareReplay());
  }

  getData(peopleindex: number = 1) {
    if (!this.apiStore.has(peopleindex)) {
      this.apiStore.set(peopleindex, this.getApiRequest(peopleindex));
    }
    return this.apiStore.get(peopleindex);
  }
}
