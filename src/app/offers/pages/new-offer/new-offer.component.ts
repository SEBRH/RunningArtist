import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ArtistService} from "../../services/artist-service";
import {ArtistEntity} from "../../models/artist.entity";

@Component({
  selector: 'app-new-offer',
  templateUrl: './new-offer.component.html',
  styleUrl: './new-offer.component.css'
})
export class NewOfferComponent {

  newOfferGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private artistService: ArtistService) {
    this.newOfferGroup = this.formBuilder.group({
      title: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      description: new FormControl('', [Validators.required, Validators.minLength(2)]),
      points: new FormControl(null, [Validators.required, Validators.max(100)]),
      businessId: new FormControl(null, [Validators.required, Validators.min(1)])
    });

  }

  onCancel(){
      const editUrl = '/business/offers';
      this.router.navigateByUrl(editUrl);
  }

  onSubmit(){
    const selectedData = this.newOfferGroup.value;
    if (this.newOfferGroup.valid && this.newOfferGroup.dirty) {
      const updatedOffer: ArtistEntity = {
        ...selectedData
      };
      this.artistService.create(updatedOffer).subscribe( response => {
          console.log('Artist updated successfully:', response);
          const editUrl = '/business/offers';
          console.log('Submit');
          this.router.navigateByUrl(editUrl);},
        error => {
          console.error('Error creating artist:', error);
        });
    }
  }

}
