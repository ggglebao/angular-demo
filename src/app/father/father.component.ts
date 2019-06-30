import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.sass']
})
export class FatherComponent implements OnInit {

  public color: Boolean = true;
  constructor() { }

  ngOnInit() {
  }

  public doSomeThing(event): void {
    // alert(`传递` + event );
    this.color = !this.color;
  }
}
