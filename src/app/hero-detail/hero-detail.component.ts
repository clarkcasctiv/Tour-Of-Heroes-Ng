import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import {ActivatedRoute} from '@angular/router';
import {HeroService} from '../hero.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;
  // ActivatedRoute -- holds information about the route
  // Location -- Angular Service for interacting with the browser
  constructor(private route: ActivatedRoute, private heroService: HeroService, private location: Location) {}

  ngOnInit() {
    this.getHero();
  }

  getHero(): void {
    // + converts string to number
    const id = +this.route.snapshot.paramMap.get('id');
    // route.snapshot -- static image of route information
    // paramMap -- dictionary of route parameter

    this.heroService.getHero(id).subscribe(hero => this.hero = hero);
  }

  goBack(): void {
this.location.back();
  }
}
