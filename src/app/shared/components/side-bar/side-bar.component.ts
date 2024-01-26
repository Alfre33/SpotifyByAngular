import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  linksMenu:Array<any> = [
    {
      name:'Home',
      icon:'uil-estate'
    },
    {
      name:'Buscar',
      icon:'uil-search'
    }
  ];
  constructor() { }

  ngOnInit(): void {
    
  }

}
