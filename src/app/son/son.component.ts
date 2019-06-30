import { Component, OnInit , Input,  Output , EventEmitter} from '@angular/core';
import { EventBusService } from '../services/event-bus.service';

@Component({
  selector: 'son',
  templateUrl: './son.component.html',
  styleUrls: ['./son.component.sass']
})
export class SonComponent implements OnInit {

  public sonIsShow: Boolean = true;
  @Output()
  public follow = new EventEmitter<string>();

  @Input()
  public title: String = '儿子';
  constructor( public eventBus: EventBusService ) {

   }

  ngOnInit() {
    this.eventBus.eventBus.subscribe((arg) => {
      console.log(`儿子接受到事件${arg}`);
      this.sonIsShow = !this.sonIsShow;
      this.follow.emit('参数');
    });
  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {
    window.localStorage.clear();
  }

  public getSonName(): void {
    this.title = 'bushi';
    alert('lll');
  }

  public flowemit(): void {
    this.follow.emit('参数');
  }

  public writeLocalstorage(): void {
    window.localStorage.setItem('param', JSON.stringify({
      userName: 'llx',
      age: Math.random() * 20
    }));
  }

  public triggerEventBus(): void {
    this.eventBus.eventBus.next('儿子发送的事件');
  }
}
