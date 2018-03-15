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


  constructor(private movieService: MovieService) { }

  ngOnInit() {
  }

  addMovie(movie) {
  	this.movieService.addMovie(movie).subscribe((res) =>{
  		
  	}, (error) =>{

  	})
  }

}
