import { Component } from '@angular/core';
import { SubscribeService } from '../../Services/subscribe.service';


@Component({
  selector: 'app-top-header',
  standalone: true,
  imports: [],
  templateUrl: './top-header.component.html',
  styleUrl: './top-header.component.css'
})
export class TopHeaderComponent {
  constructor(private subService :SubscribeService)
  {
    this.subService=subService
  }
  onSubscribe()
  {
   
   this.subService.onSubscribe('Sugumaran');
  }
}


