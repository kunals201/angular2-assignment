import {Routes} from '@angular/router'
import {ShowTask} from "./show-task/show-task.component";
import {CreateTask} from "./create-task/create-task.component";
import {StartComponent} from "./home/start.component";


export const routes: Routes = [{
  path: '',
  component: StartComponent
}, {
  path: 'show',
  component: ShowTask
}, {
  path: 'create',
  component: CreateTask
}];
