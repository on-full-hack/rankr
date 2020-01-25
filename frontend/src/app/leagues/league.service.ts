import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { League } from './League';
import { HttpClient } from '@angular/common/http';

const leagues: League[] = [
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

@Injectable({
  providedIn: 'root',
})
export class LeagueService {
  constructor(private http: HttpClient) {}

  getLeagues() {
    return of(leagues);
  }

  getLeague(id: string) {
    return of(leagues.find(league => league.id === id));
  }

  ping$(): Observable<any> {
    return this.http.get('api/leagues/testid');
  }
}
