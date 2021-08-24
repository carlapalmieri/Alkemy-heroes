import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  URL = 'https://superheroapi.com/api/';
  Token = '10226064258094941';
  API = this.URL + this.Token;
  constructor(private http: HttpClient ) { }

  // getHeroById(id: number) {
  //   return axios.get(this.URL + this.Token + '/' + id, {headers: this.headers},).then( function( res ) {
  //     console.log(res.data);
  //   }).catch(function (err) { console.log(err)} )
  // }

  getHeroById(id: number) {
    return this.http.get(`${this.API}/${id}`)
  }
}
