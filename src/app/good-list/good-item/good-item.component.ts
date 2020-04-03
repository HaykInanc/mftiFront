import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DjangoDataService } from 'src/app/django-data.service';

@Component({
  selector: 'app-good-item',
  templateUrl: './good-item.component.html',
  styleUrls: ['./good-item.component.sass']
})
export class GoodItemComponent implements OnInit {

  @Input() good;
  @Output() notify:EventEmitter<string> = new EventEmitter<string>()
  @Output() deleted:EventEmitter<number> = new EventEmitter<number>();
  djanoData:DjangoDataService;
  constructor(_djanoData:DjangoDataService) { 
    this.djanoData = _djanoData;
  }

  ngOnInit() {
  }

  deleteSuccess(e, id){
    e.emit(id);
  }

  deleteError(error){
    alert(error.message);
  }

  deleteHandler(id){
    this.djanoData.deleteItem(id).subscribe(
                    ()=>this.deleteSuccess(this.deleted, this.good.pk), 
                    this.deleteError
                  );
  }

  send(){
    this.notify.emit('бла-бла-бла');
  }


}
