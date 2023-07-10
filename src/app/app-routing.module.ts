import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { AboutMeScreenComponent } from './screens/about-me-screen/about-me-screen.component';
import { AppsScreenComponent } from './screens/apps-screen/apps-screen.component';
import { CustomComponentsScreenComponent } from './screens/custom-components-screen/custom-components-screen.component';
import { InvalidLinkScreenComponent } from './screens/invalid-link-screen/invalid-link-screen.component';

const routes: Routes = [
  { path: '', component: HomeScreenComponent },
  { path: 'about-me', component: AboutMeScreenComponent },
  { path: 'my-apps', component: AppsScreenComponent },
  { path: 'custom-components', component: CustomComponentsScreenComponent },
  { path: '**', component: InvalidLinkScreenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
