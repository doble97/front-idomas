import { NgModule } from "@angular/core";
import { LoginComponent } from './pages/login/login.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { InputComponent } from './components/input/input.component';
import { ButtonComponent } from './components/button/button.component';
import { RouterModule } from "@angular/router";


@NgModule({
  declarations: [
    LoginComponent,
    SidebarComponent,
    InputComponent,
    ButtonComponent,
  ],
  imports:[RouterModule],
  exports:[LoginComponent, SidebarComponent]
})
export class SharedModule{}