import { NgModule } from "@angular/core";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { DecksListComponent } from './pages/decks-list/decks-list.component';
import { CardsComponent } from './pages/cards/cards.component';
import { RouterModule } from "@angular/router";
import { DecksRoutingModule } from "./decks-routing.module";

@NgModule({
    declarations:[ DashboardComponent, DecksListComponent, CardsComponent],
    exports:[DashboardComponent, DecksListComponent, CardsComponent],
    imports:[DecksRoutingModule]
})
export class DecksModule{}