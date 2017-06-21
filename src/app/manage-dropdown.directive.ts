import { Directive ,OnInit,Renderer2,HostListener,HostBinding} from '@angular/core';

@Directive({
  selector: '[appManageDropdown]'
})
export class ManageDropdownDirective {
  constructor(private renderer:Renderer2) { }
  @HostBinding('class.open') isOpen = false;
  @HostListener('click') toggleOpen(){
  	this.isOpen=!this.isOpen;
  }

  ngOnInit(){

  }
}
