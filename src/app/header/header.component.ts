import { Component } from '@angular/core';
import { SubscribeService } from '../Services/subscribe.service';
import { TopHeaderComponent } from './top-header/top-header.component';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TopHeaderComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  providers:[SubscribeService]

})
export class HeaderComponent {

  //How to provide  Dependency
  constructor(private subService :SubscribeService)
  {
    this.subService=subService
  }
  onSubscribe()
  {
   
   this.subService.onSubscribe('Sugumaran');
  }
}
