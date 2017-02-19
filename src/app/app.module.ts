import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {AppComponent}  from './app.component';
import {RouterModule} from "@angular/router";
import {routes} from "./app.routes";
import {FormsModule} from "@angular/forms";
import {ShowTask} from "./show-task/show-task.component";
import {CreateTask} from "./create-task/create-task.component";
import {StartComponent} from "./home/start.component";
@NgModule({
  imports: [BrowserModule, HttpModule,RouterModule.forRoot(routes), FormsModule, ],
  declarations: [AppComponent, ShowTask, CreateTask, StartComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
