import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

interface Movie {
  id: number;
  title: string;
  director: string;
  year: number;
 }

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  constructor(private http:HttpClient) { }
  private apiUrl='https://ubiquitous-waddle-j69jgjrw5625v75-3000.app.github.dev/movies'; 

  getMovies():Observable<Movie[]>{
    return this.http.get<Movie[]>(this.apiUrl);
  }
  getMovie(id:number):Observable<Movie>{
    return this.http.get<Movie>(this.apiUrl +`/${id}`);
  }
  createMovie(movie:Movie):Observable<Movie>{
    return this.http.post<Movie>(this.apiUrl,movie);
  }
  updateMovie(movie:Movie):Observable<Movie>{
    return this.http.put<Movie>(this.apiUrl +`/${movie.id}`,movie);
  }
  deleteMovie(id:number):Observable<void>{
    return this.http.delete<void>(this.apiUrl+`/${id}`);
    
  }
}
