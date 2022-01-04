import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { SliderComponent } from './components/slider/slider.component';
import { ItemsBannerComponent } from './components/items-banner/items-banner.component';
import { ItemComponent } from './components/item/item.component';
import { PaginatorModule } from 'primeng/paginator';
import { TabViewModule } from 'primeng/tabview';
import { TvShowsComponent } from './pages/tv-shows/tv-shows.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { TvShowDetailsComponent } from './pages/tv-show-details/tv-show-details.component';
import { VideoEmbedComponent } from './components/video-embed/video-embed.component';
import { ImageModule } from 'primeng/image';
import { CarouselModule } from 'primeng/carousel';
import { GenresComponent } from './pages/genres/genres.component';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent,
		HomeComponent,
		MoviesComponent,
		SliderComponent,
		ItemsBannerComponent,
		ItemComponent,
		TvShowsComponent,
		MovieDetailsComponent,
		TvShowDetailsComponent,
		VideoEmbedComponent,
		GenresComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		HttpClientModule,
		PaginatorModule,
		TabViewModule,
		ImageModule,
		CarouselModule,
		InputTextModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
