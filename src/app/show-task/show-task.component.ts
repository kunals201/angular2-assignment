import {Component} from '@angular/core';
import {AppService} from "../app.service";
import {Operation} from "../app.operation";
import {Router} from "@angular/router";

@Component({
  selector: '',
  templateUrl:'./app/show-task/show-task.component.html',
})
export class ShowTask {
  details: Operation[];
  date = "";

  constructor(private router: Router) { }
  public ngOnInit(): any {
    this.details = AppService.details;
  }

  edit(detail: Operation) {
    let storage=new AppService;
    AppService.details.splice(this.details.indexOf(detail), 1);
    storage.store(detail);
    this.router.navigate(['create']);
  }

  done(detail: Operation) {
    AppService.details.splice(this.details.indexOf(detail), 1);
    this.details = AppService.details;
  }
}
