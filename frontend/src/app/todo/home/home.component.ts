import { Component } from '@angular/core';
import { InsertComponent } from '../insert/insert.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [InsertComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
   isModalCall:boolean = false;

}
