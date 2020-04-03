import { Component, OnInit } from '@angular/core';
import { DjangoDataService } from '../django-data.service';

@Component({
  selector: 'app-good-list',
  templateUrl: './good-list.component.html',
  styleUrls: ['./good-list.component.sass']
})
export class GoodListComponent implements OnInit {
  items:Array<Object> = [];
  djangoService:DjangoDataService;
  constructor(_djangoService:DjangoDataService) { 
    this.djangoService = _djangoService;
    this.djangoService.getAll().subscribe(list=>this.items = list['data']);

  }
  message:string;

  ngOnInit() {

  }

  getMessage(message){
    this.message = message;
  }

  deleteElem(id){
    this.items = this.items.filter(elem=>id != elem['pk']);
  }

  refreshList(){
    this.djangoService.getAll().subscribe(list=>this.items = list['data']);
  }

}