import {Injectable} from "@angular/core";
import {Operation} from "./app.operation";

@Injectable()

export class AppService{
  static data:Operation=null;
  static details:Operation[]=[{
    date: '10/10/2016',
    title:'project',
    description:'Working on Play FrameWork',
    priority: 'Medium'
  },
    {
      date: '01/12/2017',
      title:'job',
      description:'Need to perform well',
      priority: 'High'
    },
    {
      date: '15/8/2016',
      title:'learning',
      description:'Need to do hard work',
      priority: 'Low'
    }];

  setDetails(op:Operation){
    AppService.details.push(op);
  }
  store(op:Operation){
    AppService.data=op;
  }
}
