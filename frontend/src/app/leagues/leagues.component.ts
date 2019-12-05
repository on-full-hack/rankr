import { Component, OnInit } from '@angular/core';
import { LeagueService } from './league.service';
import { League } from './League';

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.css'],
})
export class LeaguesComponent implements OnInit {
  leagues: League[];

  constructor(private leagueService: LeagueService) {}

  ngOnInit() {
    this.getLeagues();
  }

  getLeagues() {
    this.leagueService.getLeagues().subscribe(leagues => {
      console.log(leagues);
      this.leagues = leagues;
    });
  }
}
