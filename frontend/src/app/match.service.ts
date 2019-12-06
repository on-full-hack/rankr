import { Injectable } from '@angular/core';
import { Match } from './match';
import { of } from 'rxjs';

const matches: Match[] = [
  { id: '1', playedAt: new Date(), player1: 'Phil', player2: 'Luke', wonBy: 'Phil', leagueId: '1' },
  { id: '2', playedAt: new Date(), player1: 'Phil', player2: 'Luke', wonBy: 'Phil', leagueId: '1' },
  { id: '3', playedAt: new Date(), player1: 'Phil', player2: 'Luke', wonBy: 'Phil', leagueId: '1' },
  { id: '4', playedAt: new Date(), player1: 'Phil', player2: 'Luke', wonBy: 'Phil', leagueId: '1' },
];

@Injectable({
  providedIn: 'root',
})
export class MatchService {
  constructor() {}

  getMatches(leagueId: string) {
    return of(matches.filter(match => match.leagueId === leagueId));
  }
}
