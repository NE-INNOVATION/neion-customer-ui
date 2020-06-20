import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';

/* NgRx */
import { StoreModule } from '@ngrx/store';
import { reducer } from './state/customer.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CustomerEffects } from './state/customer.effects';
import { CommonService } from './services/common.service';
import { CustomerService } from './services/customer.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDatepickerModule,
    MatMomentDateModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreModule.forFeature('customers', reducer),
    EffectsModule.forFeature([CustomerEffects]),
  ],
  providers: [CommonService, CustomerService],
  bootstrap: [],
  entryComponents: [AppComponent],
})
export class AppModule {
  constructor(private injector: Injector) {}
  ngDoBootstrap() {
    const el = createCustomElement(AppComponent, {
      injector: this.injector,
    });
    customElements.define('neion-customer-ele', el);
  }
}
