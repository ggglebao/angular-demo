import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'test-model',
  templateUrl: './test-model.component.html',
  styleUrls: ['./test-model.component.sass']
})
export class TestModelComponent implements OnInit {
  public ishow =  true;

  public races: Array<any> = [
    {name: '人族' },
    {name: '虫族' },
    {name: '神族' }
  ];

  public currentTime: Date = new Date();

  constructor() {
    setInterval(() => {
      this.currentTime = new Date();
    }, 1000);
  }

  ngOnInit() {
  }

  public isShow(): void {
    this.ishow = !this.ishow;
  }
}
