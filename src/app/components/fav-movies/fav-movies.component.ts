import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service'

@Component({
  selector: 'app-fav-movies',
  templateUrl: './fav-movies.component.html',
  styleUrls: ['./fav-movies.component.css'],
   providers:[MovieService],
})
export class FavMoviesComponent implements OnInit {
 favMoviesList=[];
  constructor(private movieService : MovieService) { }

  ngOnInit() {
	  this.movieService.showFav().subscribe((res) =>{
	      this.favMoviesList = res.movies;
	  })
	}

}
