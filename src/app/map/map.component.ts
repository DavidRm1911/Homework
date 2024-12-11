import { Component } from '@angular/core';
import {LayoutComponent} from '../layout/layout.component';

@Component({
  selector: 'app-map',
  imports: [
    LayoutComponent
  ],
  templateUrl: './map.component.html',
  standalone: true,
  styleUrl: './map.component.css'
})
export class MapComponent {

}
