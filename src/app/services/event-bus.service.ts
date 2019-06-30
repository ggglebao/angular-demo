import { Injectable } from '@angular/core';
import { Observable, Subject  } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EventBusService {

  public eventBus: Subject<String>  = new Subject();
  constructor() { }
}
