import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';
import { TeamService } from 'src/app/services/team.service';
import { Hero, PowerstatsTeam } from 'src/app/shared/hero';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  constructor(private heroesservice: HeroesService, private teamservice: TeamService) { }

  heroes: Hero[] = []


  powerstats: PowerstatsTeam = {
    intelligence: 0,
    strength: 0,
    speed: 0,
    durability: 0,
    power: 0,
    combat: 0
  }
  ngOnInit(): void {
    this.heroes = this.requestHeroes()
    this.powerstats = this.teamservice.getPowerstats()
    // this.heroesservice.getHeroById(1).subscribe(
    //   res => {
    //   this.heroes = res
    //   console.log(res)
    // },
    // err => console.log(err))
  }

  requestHeroes() {
    return this.teamservice.getHeroes()
  }

  deleteHero(hero:any) {
    this.teamservice.deleteHero(hero);
    this.powerstats = this.teamservice.getPowerstats()
  }
}
