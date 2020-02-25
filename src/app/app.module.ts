import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExampleComponent } from './example/example.component';
import { DependencyServiceStubComponent } from './services/dependency-service-stub/dependency-service-stub.component';
import { AsyncExampleComponent } from './async-example/async-example.component';
import { FormattedPipe } from './pipes/formatted.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    DependencyServiceStubComponent,
    AsyncExampleComponent,
    FormattedPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
