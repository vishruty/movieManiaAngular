import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from '../../../../services/movie.service'


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
  providers:[MovieService]

})
export class MovieComponent implements OnInit {

	@Input() movie : any;
  btn_val='add to favourites';

  constructor(private movieService: MovieService) { }

  ngOnInit() {
  }

  addMovie(movie) {
    this.btn_val="Added to favourites";
  	this.movieService.addMovie(movie).subscribe((res) =>{
  		
  	}, (error) =>{

  	})
  }

}
