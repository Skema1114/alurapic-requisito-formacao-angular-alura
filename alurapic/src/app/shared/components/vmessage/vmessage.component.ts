import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ap-vmessage',
  templateUrl: './vmessage.component.html',
  styleUrls: ['./vmessage.component.css'],
})
export class VmessageComponent implements OnInit {
  @Input() text = '';

  constructor() {}

  ngOnInit(): void {}
}
