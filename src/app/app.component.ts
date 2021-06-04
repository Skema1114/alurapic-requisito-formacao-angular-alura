import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'alurapic-requisito-formacao-angular-alura';
  photos = [
    {
      url: 'https://img.ibxk.com.br/2016/02/24/24120655953583.jpg?w=1120&h=420&mode=crop&scale=both',
      description: 'Windows 10',
    },
    {
      url: 'https://s2.glbimg.com/OiqwT3zo76JM2s6VPKx-pBok4cU=/0x0:900x563/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2018/W/W/tL97rLTymUf4YFP3gQqg/windows7-wallpaper.jpg',
      description: 'Windows 7',
    },
  ];
}
