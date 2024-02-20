import { Component } from '@angular/core';
import { SubscribeService } from '../Services/subscribe.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers:[SubscribeService]
})
export class HomeComponent {
  images:'assets/images.jpeg';
  constructor(private subService:SubscribeService)
  {

  }
  onSubscribe()
  {
   
    this.subService.onSubscribe('Sugu');
  }
}
