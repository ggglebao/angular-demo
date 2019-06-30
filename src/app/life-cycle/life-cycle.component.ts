import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit} from '@angular/core';
import {AfterViewChecked, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LifeCycleComponent implements OnInit, OnChanges, DoCheck, AfterContentChecked, AfterContentInit, AfterViewInit
, AfterViewChecked {

  @Input()
  public obj: Object = {};

  @Input()
  public str: String = '';

  public logs: Array<String> = [];

  constructor() { }

  ngOnInit() {
    this.logs.push('ngOnInit..');
  }

  ngOnChanges() {
    this.logs.push('ngOnChanges..');
  }

  ngDoCheck() {
    this.logs.push('ngDoCheck..');
  }

  ngAfterContentInit() {
    this.logs.push('ngAfterContentInit..');
  }

  ngAfterContentChecked() {
    this.logs.push('ngAfterContentChecked..');
  }

  ngAfterViewInit() {
    this.logs.push('ngAfterViewInit..');
  }

  ngAfterViewChecked() {
    this.logs.push('ngAfterViewChecked..');
  }

  ngOnDestory() {
    this.logs.push('ngOnDestory..');
  }

  public doDestory(): void {
    this.ngOnDestory();
  }

}
