import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './public/pages/home/home.component';
import { ListOffersComponent } from './offers/pages/list-offers/list-offers.component';
import { EditOfferComponent } from './offers/pages/edit-offer/edit-offer.component';
import {NewOfferComponent} from "./offers/pages/new-offer/new-offer.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'business', children: [{ path: 'offers', component: ListOffersComponent }]},
  { path: 'admin/offers/edit/:id', component: EditOfferComponent }, // Ruta para la edición con parámetro ID
  { path: 'admin/offers/new', component: NewOfferComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
