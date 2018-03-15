import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  public movies =[];
  constructor() { }

  ngOnInit() {
  }

  //display json movie list 
   setMovielist(event) {
  	this.movies = event.moviesList;
  }

}
