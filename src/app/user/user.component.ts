import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent implements OnInit {
  public title: String = '李立新';
  public imageSrc: String = '../../assets/1.jpg';

  constructor() { }

  ngOnInit() {
  }
  public sayHello(name: string): void {
    alert(name);
  }

  public changeImg(): void {
    if ( Math.ceil(Math.random() * 10) % 2 === 0) {
      this.imageSrc = '../../assets/1.jpg';
    } else {
      this.imageSrc = '../../assets/2.jpg';
    }
  }
}
