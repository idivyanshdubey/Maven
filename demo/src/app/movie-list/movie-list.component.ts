import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../movie-service.service';
import { Router } from '@angular/router';
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit{
  movies:any=[];
  filteredMovies:any=[];
  searchText:string='';
 
  constructor(private movieService:MovieServiceService,private router:Router){}
  ngOnInit(): void {
    this.movieService.getMovies().subscribe((data) => {this.movies=data});
    this.filteredMovies = [...this.movies];
  }
  
  editMovie(id:number):void{
    this.router.navigate(["/edit" +`/${id}`]);
  }
  deleteMovie(id:number):void{
   this.movieService.deleteMovie(id).subscribe(() => {this.movies= this.movies.filter((movie:any) => movie.id !==id)})
  }
  filterMovies(): void {
    if (this.searchText) {
    this.filteredMovies = this.movies.filter(
    (movie: { title: string; director: string; }) =>
    movie.title.toLowerCase().includes(this.searchText.toLowerCase()) ||
    movie.director.toLowerCase().includes(this.searchText.toLowerCase())
    );
    } else {
    this.filteredMovies = [...this.movies]; // Show all movies if no search text
    }


  }

}
