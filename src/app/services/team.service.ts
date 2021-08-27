import { Injectable } from '@angular/core';
import { Hero, PowerstatsTeam } from '../shared/hero';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  heroesTeam: Hero[] = [{
    id: '346',
    name: "Iron Man",
    powerstats: {
        intelligence: '100',
        strength: '85',
        speed: '58',
        durability: '85',
        power: '100',
        combat: '64'
    },
    biography: {
        'full-name': 'Tony Stark',
        'alter-egos': 'No alter egos found.',
        aliases: [
            'Iron Knight',
            'Hogan Potts',
            'Spare Parts Man',
            'Cobalt Man II',
            'Crimson Dynamo',
            'Ironman'
        ],
        'place-of-birth': 'Long Island, New York',
        'first-appearance': 'Tales of Suspence #39 (March, 1963)',
        publisher: 'Marvel Comics',
        alignment: 'good'
    },
    appearance: {
        gender: 'Male',
        race: 'Human',
        height: [
            "6'6",
            '198 cm'
        ],
        weight: [
            '425 lb',
            '191 kg'
        ],
        'eye-color': 'Blue',
        'hair-color': 'Black'
    },
    work: {
        occupation: 'Inventor, Industrialist; former United States Secretary of Defense',
        base: 'Seattle, Washington'
    },
    connections: {
        'group-affiliation': 'Avengers, Illuminati, Stark Resilient; formerly S.H.I.E.L.D., leader of Stark Enterprises, the Pro-Registration Superhero Unit, New Avengers, Mighty Avengers, Hellfire Club, Force Works, Avengers West Coast, United States Department of Defense.',
        'relatives': 'Howard Anthony Stark (father, deceased), Maria Stark (mother, deceased), Morgan Stark (cousin), Isaac Stark (ancestor)'
    },
    image: {
        'url': 'https://www.superherodb.com/pictures2/portraits/10/100/85.jpg'
    }
  },];

  powerstatsTeam: PowerstatsTeam = {
    intelligence: 0,
    strength: 0,
    speed: 0,
    durability: 0,
    power: 0,
    combat: 0
  }
  

  constructor() { }

  ngOnInit() {
  }

  addHero(hero: any) {
    if(!this.heroExists(hero) && this.heroesTeam.length < 6) {
      if(this.orientation(hero) === "good" && this.goodCount() < 3) {
        this.heroesTeam.push(hero);
        this.calculatePowerstats();
        Swal.fire({
          icon: 'success',
          title: 'Héroe añadido',
          showConfirmButton: false,
          timer: 1000
        })
      } else {
        if(this.orientation(hero) === "bad" && this.badCount() < 3) {
          this.heroesTeam.push(hero);
          this.calculatePowerstats();
          Swal.fire({
            icon: 'success',
            title: 'Villano añadido',
            showConfirmButton: false,
            timer: 1000
          })
        } else {
          if(this.orientation(hero) === "good") {
            Swal.fire({
              icon: 'error',
              title: 'Ya tienes 3 héroes en tu equipo',
              showConfirmButton: false,
              timer: 1000
            })
          } else {
            Swal.fire({
            icon: 'error',
            title: 'Ya tienes 3 villanos en tu equipo',
            showConfirmButton: false,
            timer: 1000
            })
          }
          
        }
      }
    } else {
      if(this.heroExists(hero)) {
        Swal.fire({
          icon: 'error',
          title: 'Este héroe ya está en tu equipo',
          showConfirmButton: false,
          timer: 1000
        })
      } else {
        Swal.fire({
          icon: 'error',
          title: 'El equipo ya esta lleno',
          showConfirmButton: false,
          timer: 1000
        })
      }
    }
    
  }

  getHeroes() {
    console.log(this.heroesTeam)
    return this.heroesTeam;
  }

  deleteHero(hero: any) {
    this.heroesTeam.splice(this.heroesTeam.indexOf(hero), 1)
  }

  heroExists(heroeEvaluado: any):boolean {
    let exists = false
    for(const hero of this.heroesTeam) {
      if(hero.id === heroeEvaluado.id) {
        exists = true
        return exists
      }
      else {
      }
    }
    return exists
  }

  goodCount() {
    let goodHeroes = 0
    for(const hero of this.heroesTeam) {
      if(hero.biography.alignment === "good") {
        goodHeroes += 1;
      }
      else {
      }
    }
    return goodHeroes
  }

  badCount() {
    let badHeroes = 0
    for(const hero of this.heroesTeam) {
      if(hero.biography.alignment === "bad") {
        badHeroes += 1;
      }
      else {
      }
    }
    return badHeroes
  }

  orientation(heroeEvaluado: any):string {
    return heroeEvaluado.biography.alignment
  }

  getPowerstats() {
    this.calculatePowerstats()
    return this.powerstatsTeam
  }

  calculatePowerstats() {
    let intelligence = 0;
    let strength = 0;
    let speed = 0;
    let durability = 0;
    let power = 0;
    let combat = 0
    for(const hero of this.heroesTeam) {
      if(isNaN(parseInt(hero.powerstats.intelligence))) {
      } else {
        intelligence += parseInt(hero.powerstats.intelligence)
      }
      if(isNaN(parseInt(hero.powerstats.speed))) {} else {
        speed += parseInt(hero.powerstats.speed)
      }
      if(isNaN(parseInt(hero.powerstats.durability))) {}else {
        durability += parseInt(hero.powerstats.durability)
      }
      if(isNaN(parseInt(hero.powerstats.strength))) {} else {
        strength += parseInt(hero.powerstats.strength)
      }
      if(isNaN(parseInt(hero.powerstats.power))) {} else {
        power += parseInt(hero.powerstats.power)
      }
      if(isNaN(parseInt(hero.powerstats.combat))) {} else {
        combat += parseInt(hero.powerstats.combat)
      }
    }
    this.powerstatsTeam.intelligence = intelligence
    this.powerstatsTeam.strength = strength
    this.powerstatsTeam.speed = speed
    this.powerstatsTeam.durability = durability
    this.powerstatsTeam.power = power
    this.powerstatsTeam.combat = combat
  }
}
