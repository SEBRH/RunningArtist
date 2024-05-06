import {Component, OnInit} from '@angular/core';
import {ArtistService} from "../../../offers/services/artist-service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  offersCount: number = 0;
  constructor(private artistService:ArtistService) {

  }
  private getAllArtist() {
    this.artistService.getAll().subscribe(
      (response: any) => {
        this.offersCount = response.length;
      },
      (error) => {
        console.error('Error fetching data', error);
      });
  };
  //aca hacer un fecth a la api para traer la cantidad de ofertas


  ngOnInit(){
    this.getAllArtist();
  }
}
