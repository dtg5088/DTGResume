import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  skills: any[] = [
    {
      "name": "angular",
      "src": "../../../../"
    },
  ];

}
