import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HeroesService } from 'src/app/services/heroes.service';
import { debounceTime, distinctUntilChanged, filter, map, tap } from 'rxjs/operators';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-seeker',
  templateUrl: './seeker.component.html',
  styleUrls: ['./seeker.component.css']
})
export class SeekerComponent implements OnInit {
  
  searchInput = new FormControl('')
  results: any;

  constructor(private heroesservice: HeroesService, private teamservice: TeamService) { 
    this.searchInput.valueChanges.pipe(
      map( search => search?.toLowerCase().trim()),
      debounceTime(400),
      distinctUntilChanged(),
      filter( search => search != ''),
      tap(search => {this.searchFunction(search)})
    ).subscribe()
   }

  ngOnInit(): void {
  }

  searchFunction(name:string) {
    this.heroesservice.searchHero(name).subscribe(
      res => {
      this.results = res
    },
    err => console.log('ocurrió algo' + err))
  }

  addToTheTeam(hero:any){
    this.teamservice.addHero(hero)
  }

}

