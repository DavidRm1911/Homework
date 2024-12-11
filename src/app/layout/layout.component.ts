import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  standalone: true,
  imports: [
    RouterLink,
    NgForOf
  ],
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  links = [
    { label: 'Identify', href: '/identify' },
    { label: 'Forum', href: '/forum' },
    { label: 'Map', href: '/map' },
    { label: 'Who are we', href: '/about' },
    { label: 'Helps', href: '/helps' },
  ];
}
