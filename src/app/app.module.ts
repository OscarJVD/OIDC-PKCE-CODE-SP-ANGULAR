import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';
import { SamlComponent } from './components/registro/saml/saml.component';
import { OpenidComponent } from './components/registro/openid/openid.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SidebarComponent } from './components/registro/sidebar/sidebar.component';
import { HeaderComponent } from './components/registro/header/header.component';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FormulariosamlComponent } from './components/registro/saml/formulariosaml/formulariosaml.component';
import { TablasamlComponent } from './components/registro/saml/tablasaml/tablasaml.component';
import { MetadataComponent } from './components/registro/saml/tablasaml/metadata/metadata.component';
import { FormularioopenidComponent } from './components/registro/openid/formularioopenid/formularioopenid.component';
import { TablaopenidComponent } from './components/registro/openid/tablaopenid/tablaopenid.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { PaginatePipe } from './components/registro/saml/tablasaml/pipes/paginate.pipe';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { DataServices } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { ClipboardModule } from '@angular/cdk/clipboard';

import { OAuthModule } from 'angular-oauth2-oidc';
import { TokenResolverService } from './services/token-resolver.service';
import { LogoutComponent } from './components/registro/header/logout/logout.component';
import { WelcomeComponent } from './components/registro/welcome/welcome.component';
import { SecretComponent } from './components/registro/openid/tablaopenid/secret/secret.component';


@NgModule({
  declarations: [
    AppComponent,

    RegistroComponent,
    LoginComponent,
    SamlComponent,
    OpenidComponent,
    SidebarComponent,
    HeaderComponent,
    FormulariosamlComponent,
    TablasamlComponent,
    MetadataComponent,
    FormularioopenidComponent,
    TablaopenidComponent,
    PaginatePipe,
    LogoutComponent,
    WelcomeComponent,
    SecretComponent,



  ],
  imports: [
    BrowserModule,
    ClipboardModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    OAuthModule.forRoot(),

  ],
  providers: [DataServices, TokenResolverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
