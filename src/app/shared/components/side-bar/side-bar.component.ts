import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
 
  mainMenu:{
    defaultOptions: Array<any>,
    accessLink:Array<any>,
  }={
    defaultOptions:[],
    accessLink:[]
  }

  customOptions:Array<any>=[]

  constructor() { }

  ngOnInit(): void {

    this.mainMenu.defaultOptions=[
      {
        name:'Home',
        icon:'uil uil-estate',
        router:['/']
      },
      {
        name:'Buscar',
        icon:'uil uil-search',
        router:['/','history']
      },
      {
        name:'Tu biblioteca',
        icon:'uil uil-chart',
        router:['/','favorites']
      }
    ]
    
    this.mainMenu.accessLink=[
      {
        name:'Crear lista',
        icon:'uil uil-plus-circle',
      },
      {
        name:'Tus canciones favoritas',
        icon:'uil-folder-heart',
      },

    ]

    this.customOptions=[
      {
        name:'PlayList 1',
        icon:'uil uil-list-ul',
        router:['/',]
      },
      {
        name:'PlayList 2',
        icon:'uil uil-list-ul',
        router:['/',]
      },
      {
        name:'PlayList 3',
        icon:'uil uil-list-ul',
        router:['/',]
      },
      {
        name:'PlayList 4',
        icon:'uil uil-list-ul',
        router:['/',]
      },
    ]

  }

}
