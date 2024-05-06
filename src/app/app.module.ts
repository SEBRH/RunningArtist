import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './public/pages/home/home.component';
import { ToolbarComponent } from './public/components/toolbar/toolbar.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatToolbarModule} from "@angular/material/toolbar";
import {MatMenu, MatMenuItem} from "@angular/material/menu";
import {MatAnchor, MatButton, MatIconButton} from "@angular/material/button";
import {MatDrawer} from "@angular/material/sidenav";
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardImage} from "@angular/material/card";
import {NgOptimizedImage} from "@angular/common";
import {MatCardModule} from "@angular/material/card";
import { ListOffersComponent } from './offers/pages/list-offers/list-offers.component';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef, MatHeaderRow,
  MatHeaderRowDef, MatRow, MatRowDef,
  MatTable
} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatIcon} from "@angular/material/icon";
import {HttpClientModule} from "@angular/common/http";
import {ArtistService} from "./offers/services/artist-service";
import { EditOfferComponent } from './offers/pages/edit-offer/edit-offer.component';
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatLabel} from "@angular/material/form-field";
import {MatError} from "@angular/material/form-field";
import { NewOfferComponent } from './offers/pages/new-offer/new-offer.component';
import {MatHint} from "@angular/material/form-field";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolbarComponent,
    ListOffersComponent,
    EditOfferComponent,
    NewOfferComponent
  ],
  imports: [
    MatHint,
    MatError,
    MatLabel,
    HttpClientModule,
    MatCardModule,
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatMenu,
    MatMenuItem,
    MatButton,
    MatAnchor,
    MatDrawer,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardActions,
    MatCardImage,
    NgOptimizedImage,
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatHeaderCellDef,
    MatCellDef,
    MatPaginator,
    MatHeaderRowDef,
    MatHeaderRow,
    MatRow,
    MatRowDef,
    MatIcon,
    MatIconButton,
    MatFormField,
    MatInput,
    ReactiveFormsModule
  ],
  providers: [
    provideAnimationsAsync(),
    ArtistService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
