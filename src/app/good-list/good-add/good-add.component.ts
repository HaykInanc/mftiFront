import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DjangoDataService } from '../../django-data.service';

@Component({
  selector: 'app-good-add',
  templateUrl: './good-add.component.html', 
  styleUrls: ['./good-add.component.sass']
})
export class GoodAddComponent implements OnInit {
  djangoData:DjangoDataService;
  data:any;
  @Output() addEvent:EventEmitter<any> = new EventEmitter<any>();

  constructor(_djangoData:DjangoDataService) { 
    this.djangoData = _djangoData;
    this.data = {};
    this.data.title = '';
    this.data.price = '';
    this.data.description = '';
  }

  ngOnInit() {

  }

  addSuccess(e, data){
    e.emit();
    data.title = '';
    data.price = '';
    data.description = '';
  }

  addHandler(){
    this.djangoData.addItem(this.data).subscribe(
                   ()=>this.addSuccess(this.addEvent, this.data),
                   ()=>console.log('error')
                );
  }

}
