import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {ContentService } from '../service/content.service'; 
import {DataAccessorService } from '../service/data-accessor.service'; 
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public router:Router, public content:ContentService, public data:DataAccessorService) {}
  items = [
    'Pokémon Yellow',
    'Super Metroid',
    'Mega Man X',
    'The Legend of Zelda',
    'Pac-Man',
    'Super Mario World',
    'Street Fighter II',
    'Half Life',
    'Final Fantasy VII',
    'Star Fox',
    'Tetris',
    'Donkey Kong III',
    'GoldenEye 007',
    'Doom',
    'Fallout',
    'GTA',
    'Halo'
  ];
  dataList:any = this.data;
  itemSelected(item: string) {
    console.log("******* ", this.dataList , "*******");
    //this.router.navigate(['displayer']);
    let x = this.data.getData();
    console.log(x);
  }

}
