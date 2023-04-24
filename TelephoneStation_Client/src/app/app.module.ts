import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhoneBookComponent } from './pages/phone-book/phone-book.component';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { AdminPanelComponent } from './pages/admin-panel/admin-panel.component';
import { AccountComponent } from './pages/account/account.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContactComponent } from './components/contact/contact.component';
import { ServiceComponent } from './components/service/service.component';
import { ReplenishComponent } from './modals/replenish/replenish.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CallComponent } from './modals/call/call.component';
import { NotificationComponent } from './components/notification/notification.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { ReceiptsComponent } from './pages/receipts/receipts.component';
import { HelpMessengerComponent } from './modals/help-messenger/help-messenger.component';
import { AboutComponent } from './pages/about/about.component';
import { LogoComponent } from './components/logo/logo.component';
import { AccountBtnComponent } from './components/account-btn/account-btn.component';
import { BallanceComponent } from './components/ballance/ballance.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CallItemComponent } from './components/call-item/call-item.component';
import { ReceiptComponent } from './components/receipt/receipt.component';

@NgModule({
  declarations: [
    AppComponent,
    PhoneBookComponent,
    LoginComponent,
    SignUpComponent,
    AdminPanelComponent,
    AccountComponent,
    ServicesComponent,
    ContactComponent,
    ServiceComponent,
    ReplenishComponent,
    HeaderComponent,
    FooterComponent,
    NavBarComponent,
    CallComponent,
    NotificationComponent,
    NotificationsComponent,
    ReceiptsComponent,
    HelpMessengerComponent,
    LogoComponent,
    AccountBtnComponent,
    BallanceComponent,
    CallItemComponent,
    ReceiptComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'phone-book', component: PhoneBookComponent },
      { path: 'receipts', component: ReceiptsComponent },
      { path: 'services', component: ServicesComponent },
      { path: 'notitications', component: NotificationsComponent },
      { path: '', component: LoginComponent },
      { path: 'sign-up', component: SignUpComponent },
      { path: 'account', component: AccountComponent },
      { path: 'about', component: AboutComponent }
    ])
  ],
  providers: [
    HttpClient 
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
