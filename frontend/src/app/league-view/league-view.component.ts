import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LeagueService } from '../leagues/league.service';
import { League } from '../leagues/League';
import { MatchService } from '../match.service';
import { Match } from '../match';

@Component({
  selector: 'app-league-view',
  templateUrl: './league-view.component.html',
  styleUrls: ['./league-view.component.css'],
})
export class LeagueViewComponent implements OnInit {
  leagueId: string;
  league: League;
  matches: Match[];
  displayedColumns = ['id', 'player1', 'player2', 'wonBy'];

  constructor(
    private route: ActivatedRoute,
    private leagueService: LeagueService,
    private matchService: MatchService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.leagueId = params.get('id');
    });
    this.leagueService.getLeague(this.leagueId).subscribe(league => (this.league = league));
    this.matchService.getMatches(this.leagueId).subscribe(matches => (this.matches = matches));
  }
}
