import { Component, OnInit } from '@angular/core';
import { inlineImages } from '../../enums/images.enum';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.less']
})
export class HeaderNavComponent implements OnInit {

  siteLogo = "";
  constructor() { }

  ngOnInit(): void {
    this.siteLogo = inlineImages.SITE_LOGO;
  }

}
