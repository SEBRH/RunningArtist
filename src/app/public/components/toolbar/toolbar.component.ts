import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {
  options = [
    { path: '/home', title: 'Home'},
    { path: '/business/offers', title: 'Offers'},
  ]
}
