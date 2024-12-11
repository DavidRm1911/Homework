import { Component } from '@angular/core';
import {LayoutComponent} from '../layout/layout.component';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  standalone: true,
  imports: [
    LayoutComponent,
    NgForOf
  ],
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  images = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/530bbab5-8f38-40e4-8087-05f44a8092e8.jpg-ZiF0iJLysbaEyYVTtnfg4GSOdFn3zO.jpeg",
      alt: "A clear stream flowing through grassy terrain with pine trees",
      caption: "Place 1"
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9c441b83-ed51-4101-a8c7-a0802b5c4f7d.jpg-cp7HJzXXe8Y1PcD1O2P3UkqSsnhuIp.jpeg",
      alt: "Natural water pool in arid landscape with small fountain",
      caption: "Place 2"
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0ebcd3ac-4775-4554-a345-a04d04c4af4a.jpg-o0T7PIR4FKlq1baPKT64e3hxBqgjvz.jpeg",
      alt: "Winding stream in snowy landscape with tree reflections",
      caption: "Place 3"
    }
  ];
}
