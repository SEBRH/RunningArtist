import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {ArtistEntity} from "../../models/artist.entity";
import {ArtistService} from "../../services/artist-service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-offers',
  templateUrl: './list-offers.component.html',
  styleUrl: './list-offers.component.css'
})
export class ListOffersComponent implements AfterViewInit, OnInit{

  displayedColumns: string[] = ['id', 'title', 'description', 'points', 'businessId', 'actions'];
  dataSource: MatTableDataSource<ArtistEntity> = new MatTableDataSource<ArtistEntity>();
  artistData: ArtistEntity;
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;


  constructor(private artistService:ArtistService, private snackBar: MatSnackBar, private router: Router) {
    this.artistData = {} as ArtistEntity;
  }
  private getAllArtist() {
    this.artistService.getAll().subscribe(
      (response: any) => {
      console.log('DATA WZAS:', response);
      this.dataSource.data = response;
      console.log('DATA:', this.dataSource.data);
    },
      (error) => {
        console.error('Error fetching data', error);
      });
  };


  onEditItem(artist: ArtistEntity) {
    const editUrl = `/admin/offers/edit/${artist.id}`;
    this.router.navigateByUrl(editUrl, {state:{artist}});
  }

  onDeleteItem(artist: ArtistEntity) {
    this.artistService.delete(artist.id).subscribe(
      () => {
        this.dataSource.data = this.dataSource.data.filter((value) => value.id !== artist.id);
        this.showSnackBar('Offer deleted successfully');
      },
      (error) => {
        console.error('Error deleting offer', error);
      }
    );



  }

  onCreate() {
    const editUrl = `/admin/offers/new`;
    this.router.navigateByUrl(editUrl);
  }

  private showSnackBar(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
  }


  ngAfterViewInit() {
    // @ts-ignore
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {
    this.getAllArtist();
  }


}
