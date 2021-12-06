import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { OpenidComponent } from './components/registro/openid/openid.component';
import { RegistroComponent } from './components/registro/registro.component';
import { SamlComponent } from './components/registro/saml/saml.component';
import { WelcomeComponent } from './components/registro/welcome/welcome.component';
import { ActivateGuard } from './guards/activate.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'registro' },
  { path: 'login', component: LoginComponent },

  {
    path: 'registro',
    component: RegistroComponent,

    children: [
      { path: '', component: WelcomeComponent },
      { path: 'saml', component: SamlComponent },
      { path: 'openid', component: OpenidComponent },
    ],
    canActivate: [ActivateGuard],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
