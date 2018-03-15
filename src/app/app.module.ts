import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { MoviesComponent } from './components/movies/movies.component';
import { FavMovieComponent } from './components/fav-movies/fav-movie/fav-movie.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { MovieListComponent } from './components/movies/movie-list/movie-list.component';
import { MovieSearchComponent } from './components/movies/movie-search/movie-search.component';
import { FavMoviesComponent } from './components/fav-movies/fav-movies.component';
import { MovieComponent } from './components/movies/movie-list/movie/movie.component';

import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes :Routes = [
  {path: '', redirectTo:'/movies',pathMatch:'full'},
  {path: 'movies', component:MoviesComponent},
  {path: 'favourite', component:FavMoviesComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    FavMoviesComponent,
    FavMovieComponent,
    HeaderComponent,
    FooterComponent,
    MovieListComponent,
    MovieSearchComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
