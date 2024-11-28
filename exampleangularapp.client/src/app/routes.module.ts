import { NgModule } from "@angular/core";
import { provideRouter, RouterModule, Routes, withDebugTracing } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AddItemComponent } from "./add-item/add-item.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'item/add', component: AddItemComponent },
  { path: '**', redirectTo: '' }, // If we can't find the route just take the user to home
];

@NgModule({
  exports: [
    // Export the RouterModule so that it's imported into app.module.ts when this module is imported. It's needed so that our app knows what a
    // <router-outlet> component is
    RouterModule, 
  ],
  providers: [
    // Setup the routes defined above
    provideRouter(routes, withDebugTracing())
  ]
})
export class RoutesModule { }
