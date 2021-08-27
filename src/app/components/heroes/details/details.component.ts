import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';
import { TeamService } from 'src/app/services/team.service';
import { Hero } from 'src/app/shared/hero';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  hero: Hero =
    {
      id: '0',
      name: "",
      powerstats: {
          intelligence: '0',
          strength: '0',
          speed: '0',
          durability: '0',
          power: '0',
          combat: '0'
      },
      biography: {
          'full-name': '',
          'alter-egos': '',
          aliases: [
              '',
              '',
              '',
              '',
              '',
              ''
          ],
          'place-of-birth': '',
          'first-appearance': '',
          publisher: '',
          alignment: ''
      },
      appearance: {
          gender: '',
          race: '',
          height: [
              "",
              ''
          ],
          weight: [
              '',
              ''
          ],
          'eye-color': '',
          'hair-color': ''
      },
      work: {
          occupation: '',
          base: ''
      },
      connections: {
          'group-affiliation': '',
          'relatives': ''
      },
      image: {
          'url': ''
      }
    };

  constructor(private activatedRoute: ActivatedRoute, private heroesService: HeroesService, private teamService: TeamService) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    console.log(params)
    this.getHeroDetail(params.id);
  }

  getHeroDetail(id: any) {
    this.heroesService.getHeroByIdService(id).subscribe(
      res => {
      this.hero = res
      console.log(this.hero)
    },
    err => console.log('ocurrió algo' + err))
  }

  addToTheTeam(hero:any){
    this.teamService.addHero(hero)
  }
}
