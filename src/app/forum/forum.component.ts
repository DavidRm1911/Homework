import { Component } from '@angular/core';
import {LayoutComponent} from '../layout/layout.component';

@Component({
  selector: 'app-forum',
  imports: [
    LayoutComponent
  ],
  templateUrl: './forum.component.html',
  standalone: true,
  styleUrl: './forum.component.css'
})
export class ForumComponent {

}
