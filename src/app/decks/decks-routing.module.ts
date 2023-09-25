import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DecksListComponent } from './pages/decks-list/decks-list.component';
import { CardsComponent } from './pages/cards/cards.component';

const routes: Routes = [
    {path:'', component:DashboardComponent},
    {path:'decks', component:DecksListComponent},
    {path:'decks/:id',component:CardsComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],

})
export class DecksRoutingModule { }
