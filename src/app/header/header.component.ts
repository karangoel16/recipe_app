import { Component, OnInit ,EventEmitter,Output} from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  @Output() showthis = new EventEmitter<{type:string}>();
  constructor() { }

  ngOnInit() {
  }

  sendval(val:string){
    	this.showthis.emit({type:val});
  }

}
