import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { League } from './League';

@Injectable({
  providedIn: 'root',
})
export class LeagueService {
  leagues: League[] = [
    {
      id: '1',
      name: 'Squash liga',
      discipline: 'Squash',
    },
    {
      id: '2',
      name: 'Fifa',
      discipline: 'Gaming',
    },
    {
      id: '3',
      name: 'NBA 2k20',
      discipline: 'Gaming',
    },
  ];

  constructor() {}

  getLeagues() {
    return of(this.leagues);
  }

  getLeague(id: string) {
    return of(this.leagues.find(league => league.id === id));
  }
}
