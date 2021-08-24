import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  constructor(private heroesservice: HeroesService ) { }

  hero: any;

  ngOnInit(): void {
    this.heroesservice.getHeroById(1).subscribe(
      res => {
      this.hero = res
      console.log(res)
    },
    err => console.log(err))
  }

}
