import { Component, OnInit,Input } from '@angular/core';
import{MovieService} from '../../../services/movie.service'
@Component({
  selector: 'app-fav-movie',
  templateUrl: './fav-movie.component.html',
  styleUrls: ['./fav-movie.component.css'],
   providers:[MovieService]
})
export class FavMovieComponent implements OnInit {
	@Input() movie;
  constructor(private movieService:MovieService) { }

  ngOnInit() {
  }

}
