import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ArtistEntity} from "../../models/artist.entity";
import {Router} from "@angular/router";
import {ArtistService} from "../../services/artist-service";

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.component.html',
  styleUrl: './edit-offer.component.css'
})
export class EditOfferComponent implements OnInit{

  @Input() offer: ArtistEntity | undefined;

  offerGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private artistService: ArtistService) {
    this.offerGroup = this.formBuilder.group({
      title: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      description: new FormControl('', [Validators.required, Validators.minLength(2)]),
      points: new FormControl(null, [Validators.required, Validators.max(100)]),
      businessId: new FormControl(null, [Validators.required, Validators.min(1)])
    });
  }

  ngOnInit(): void {
    this.offer = history.state.artist;
    console.log('Offer:', this.offer);
    if (this.offer) {
      this.offerGroup.patchValue({
        title: this.offer.title,
        description: this.offer.description,
        points: this.offer.points,
        businessId: this.offer.businessId

      });
    }
  }

  onCancel(){
    const editUrl = '/business/offers';
    this.router.navigateByUrl(editUrl);
  }

  onSubmit(){
    console.log('Submit');
    const selectedData = this.offerGroup.value;
    if (this.offerGroup.valid && this.offer) {
      const updatedOffer: ArtistEntity = {
        id:this.offer.id,
        ...selectedData
      };
      this.artistService.update(updatedOffer.id,updatedOffer).subscribe( response => {
          console.log('Artist updated successfully:', response);
          const editUrl = '/business/offers';
          this.router.navigateByUrl(editUrl);},
        error => {
          console.error('Error updating artist:', error);
        });
      }
  }
}
