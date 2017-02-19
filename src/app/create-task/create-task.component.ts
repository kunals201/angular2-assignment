import {Component} from '@angular/core';
import {AppService} from '../app.service';
import {Operation} from "../app.operation";
@Component({
  selector: '',
  templateUrl:'./app/create-task/create-task.component.html',
  styleUrls:['./app/create-task/create-task.component.css'],
  providers: [AppService]
})
export class CreateTask {
  details: Operation[];
  data: Operation;

  constructor(private service: AppService) {
    this.details = AppService.details;
  }

  submit(date: string, title: string, description: string, priority: string) {
    let service = new AppService()
    let task = new Operation()
    task.date = date;
    task.title = title;
    task.description = description;
    task.priority = priority;
    service.setDetails(task);
  }

  public ngOnInit() {
    if (AppService.data != null) {
      this.data = AppService.data;
    } else {
      this.data = new Operation()
    }
  }
public alerting()
  {
alert("Task Submit");

  }
}
