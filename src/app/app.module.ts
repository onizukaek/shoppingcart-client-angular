import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { JwtHelper } from 'angular2-jwt';

import { APP_ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import { SignupComponent } from './modules/signup/signup.component';
import { LoginComponent } from './modules/login/login.component';
import { HomeComponent } from './modules/home/home.component';
import { AuthenticationService } from './shared/providers/authentication.service';
import { EndpointsProvider } from './shared/providers/endpoints';
import { ProductListComponent } from './modules/home/product-list/product-list.component';
import {ProductService} from "./shared/providers/product.service";
import { ProductFilterPipe } from './modules/home/product-list/product-filter.pipe';
import { ProductDetailComponent } from './modules/home/product-detail/product-detail.component';
import {ProductDetailResolve} from "./shared/resolves/product-resolve";
import { CartListComponent } from './modules/carts/cart-list/cart-list.component';
import { HeaderComponent } from './modules/layout/header/header.component';
import { CartsComponent } from './modules/carts/carts.component';
import {CartService} from "./shared/providers/cart.service";
import {CartFilterPipe} from "./modules/carts/cart-list/cart-filter.pipe";
import {ObjectToArrayPipe} from "./shared/pipes/object-to-array";
import { WelcomeComponent } from './modules/welcome/welcome.component';
import {AuthGuard} from "./shared/guards/auth.guard";
import { AlertComponent } from './shared/alert/alert.component';
import {AlertService} from "./shared/providers/alert.service";
import {FormatToPricePipe} from "./shared/pipes/format-to-price";


// Auth Factory
// TODO: add storage for token
// export function authHttpServiceFactory(http: Http, options: RequestOptions) {
//   const authConfig = new AuthConfig({
//     noJwtError: true,
//     globalHeaders: [{'Accept': 'application/json'}],
//     // tokenGetter: (() => storage.get('jwt')),
//   });
//   return new AuthHttp(authConfig, http, options);
// }

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent,
    ProductListComponent,
    ProductFilterPipe,
    CartFilterPipe,
    ProductDetailComponent,
    CartListComponent,
    CartsComponent,
    ObjectToArrayPipe,
    FormatToPricePipe,
    WelcomeComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [
    AuthenticationService,
    EndpointsProvider,
    JwtHelper,
    ProductService,
    ProductDetailResolve,
    CartService,
    AuthGuard,
    AlertService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
