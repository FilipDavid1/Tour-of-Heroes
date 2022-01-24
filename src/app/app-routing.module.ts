import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { ItemsComponent } from './items/items.component';
import { FreeItemsComponent } from './free-items/free-items.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { HeroFormComponent } from './hero-form/hero-form.component';




const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'item-detail/:id', component: ItemDetailComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'items', component: ItemsComponent },
  { path: 'free-items/:id', component: FreeItemsComponent},
  { path: 'hero-form', component: HeroFormComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
