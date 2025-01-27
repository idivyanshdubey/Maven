import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../movie-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit{
  movies:any=[];
  constructor(private movieService:MovieServiceService,private router:Router){}
  ngOnInit(): void {
    this.movieService.getMovies().subscribe((data) => {this.movies=data});
  }
  deleteMovie(id:number):void{
    this.movieService.deleteMovie(id).subscribe(() => {this.movies=this.movies.filter((movie:any) => movie.id !==id)});
  }
  editMovie(id:number):void{
    this.router.navigate(["/edit" +`/${id}`]);
  }


}
