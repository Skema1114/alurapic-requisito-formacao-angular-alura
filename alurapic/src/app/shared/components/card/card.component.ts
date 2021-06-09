import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ap-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() title: string = '';
  titleMod!: string;

  constructor() {}

  ngOnInit(): void {
    if (this.title.length > 30) {
      this.titleMod = this.title.substring(0, 30) + '...';
    }
  }
}
