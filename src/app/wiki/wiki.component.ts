import { Component, Input, OnInit } from '@angular/core';
import { Wiki } from '../services/data.service'

@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.scss'],
})
export class WikiComponent implements OnInit {
  @Input() wiki: Wiki;

  constructor() { }

  ngOnInit() {}

  isIos() { 
    const win = window as any;
    return win && win.Ionic && win.Ionic && win.Ionic.mode === 'ios';
  }
}
