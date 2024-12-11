import { Routes } from '@angular/router';
import {AboutComponent} from './about/about.component';
import {IdentifyComponent} from './identify/identify.component';
import {MapComponent} from './map/map.component';
import {HelpsComponent} from './helps/helps.component';
import {ForumComponent} from './forum/forum.component';
import {HomePageComponent} from './home-page/home-page.component';

export const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'about', component: AboutComponent},
  {path: 'identify', component: IdentifyComponent},
  {path: 'map' , component: MapComponent},
  {path: 'helps' , component: HelpsComponent},
  {path: 'forum', component: ForumComponent}
];
