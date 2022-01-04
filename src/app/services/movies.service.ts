import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie, MovieCredits, MovieDto, MovieImages, MovieVideoDto } from '../models/movie';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { GenresDto } from '../models/genre';

@Injectable({
	providedIn: 'root'
})
export class MoviesService {
	baseUrl: string = 'https://api.themoviedb.org/3';
	apiKey: string = 'fca520cb20f7d9b9d32258543f120954';

	constructor(private http: HttpClient) {}

	getMovies(type: string = 'upcoming', count: number = 12) {
		return this.http.get<MovieDto>(`${this.baseUrl}/movie/${type}?api_key=${this.apiKey}`).pipe(
			switchMap((res) => {
				return of(res.results.slice(0, count));
			})
		);
	}

	getMovieDetails(id: string) {
		return this.http.get<Movie>(`${this.baseUrl}/movie/${id}?api_key=${this.apiKey}`);
	}

	getMovieVideos(id: string) {
		return this.http.get<MovieVideoDto>(`${this.baseUrl}/movie/${id}/videos?api_key=${this.apiKey}`).pipe(
			switchMap((res) => {
				return of(res.results);
			})
		);
	}

	getMovieImages(id: string) {
		return this.http.get<MovieImages>(`${this.baseUrl}/movie/${id}/images?api_key=${this.apiKey}`);
	}

	getMovieCredits(id: string) {
		return this.http.get<MovieCredits>(`${this.baseUrl}/movie/${id}/credits?api_key=${this.apiKey}`);
	}

	getSimilarMovies(id: string, count: number = 6) {
		return this.http.get<MovieDto>(`${this.baseUrl}/movie/${id}/similar?api_key=${this.apiKey}`).pipe(
			switchMap((res) => {
				return of(res.results.slice(0, count));
			})
		);
	}

	searchMovies(page: number, searchValue?: string) {
		const uri = searchValue ? '/search/movie' : '/movie/popular';
		return this.http
			.get<MovieDto>(`${this.baseUrl}${uri}?page=${page}&query=${searchValue}&api_key=${this.apiKey}`)
			.pipe(
				switchMap((res) => {
					return of(res.results);
				})
			);
	}

	getMovieGenres() {
		return this.http.get<GenresDto>(`${this.baseUrl}/genre/movie/list?api_key=${this.apiKey}`).pipe(
			switchMap((res) => {
				return of(res.genres);
			})
		);
	}

	getMoviesByGenre(genreId: string, pageNumber: number) {
		return this.http
			.get<MovieDto>(`${this.baseUrl}/discover/movie?with_genres=${genreId}&page=${pageNumber}&api_key=${this.apiKey}`)
			.pipe(
				switchMap((res) => {
					return of(res.results);
				})
			);
	}
}

// pipe() to filter the data and do something with the data
// switchMap() to change the return data type to anothe type
// of() to cover the data in observable
