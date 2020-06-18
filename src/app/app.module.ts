import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { CustomerUiComponent } from './customer-ui/customer-ui.component';

@NgModule({
  declarations: [AppComponent, CustomerUiComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [],
  entryComponents: [CustomerUiComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {
  constructor(private injector: Injector) {}
  ngDoBootstrap() {
    const el = createCustomElement(CustomerUiComponent, {
      injector: this.injector,
    });
    customElements.define('neion-customer-ele', el);
  }
}
