import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LeagueService } from '../leagues/league.service';

@Component({
  selector: 'app-league-view',
  templateUrl: './league-view.component.html',
  styleUrls: ['./league-view.component.css'],
})
export class LeagueViewComponent implements OnInit {
  constructor(private route: ActivatedRoute, private leagueService: LeagueService) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      // this.leagueService.
      // this.product = products[+params.get('productId')]
    });
  }
}
