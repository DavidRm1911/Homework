import { Component } from '@angular/core';
import {LayoutComponent} from '../layout/layout.component';

@Component({
  selector: 'app-about',
  imports: [
    LayoutComponent
  ],
  templateUrl: './about.component.html',
  standalone: true,
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
