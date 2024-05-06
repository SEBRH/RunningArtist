import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/base.service";
import {HttpClient} from "@angular/common/http";
import {ArtistEntity} from "../models/artist.entity";

@Injectable({
  providedIn: 'root'
})

export class ArtistService extends BaseService<ArtistEntity> {
  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = "offers";
  }
}
