import { Component } from '@angular/core';
import { JsonService } from './json.service';
import usuarios from '../assets/json/users.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'repasoJSON';

  constructor(public json: JsonService){
    this.json.getJson('../assets/json/users.json').subscribe((res: any)=>{
      console.log(res);
    })
  }

}
