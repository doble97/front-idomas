import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

  @Input()
  type: string = 'text';

  @Input()
  id: string= '';
  
  @Input()
  placeholder: string = '';

  @Output()
  inputEmitter:EventEmitter<string> = new EventEmitter();

  handleChange(value: string):void{
    this.inputEmitter.emit(value);
  }
}
