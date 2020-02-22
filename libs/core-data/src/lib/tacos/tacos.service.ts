import { Taco } from './tacos';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

const BASE_URL = 'https://level-up-api-snfwxrkzok.now.sh'

@Injectable({
  providedIn: 'root'
})
export class TacosService {
model = 'tacos'

  constructor(private httpClient: HttpClient) { }

  getUrl() {
    return `${BASE_URL}/${this.model}`;
  }

  getUrlForId(id) {
    return `${this.getUrl()}/${id}`;
  }

  all() {
    return this.httpClient.get(this.getUrl());
  }

  create(taco: Taco) {
    return this.httpClient.post(this.getUrl(), taco);
  }

  delete(taco: Taco) {
    return this.httpClient.delete(this.getUrlForId(taco.id));
  }

  update(taco: Taco) {
    return this.httpClient.put(this.getUrlForId(taco.id), taco);
  }
}
