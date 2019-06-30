import { Component, OnInit, Input} from '@angular/core';
import { EventBusService } from '../services/event-bus.service';

@Component({
  selector: 'brother',
  templateUrl: './brother.component.html',
  styleUrls: ['./brother.component.sass']
})
export class BrotherComponent implements OnInit {
  public param: String ;

  @Input()
  public title: String = '儿子';

  constructor(public eventBus: EventBusService) { }

  ngOnInit() {
    this.eventBus.eventBus.subscribe((arg) => {
      console.log(`兄弟接受到事件${arg}`);
    });
  }

  public readLocalstrage(): void {
    const obj = JSON.parse(window.localStorage.getItem('param'));
    this.param = window.localStorage.getItem('param');
    console.log(obj);
  }

  public triggerEventBus(): void {
    this.eventBus.eventBus.next('兄弟发送的事件');
  }

}
