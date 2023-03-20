import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-create-onomatopia',
  templateUrl: './create-onomatopia.component.html',
  styleUrls: ['./create-onomatopia.component.css'],
})
export class CreateOnomatopiaComponent {
  newOnomatopoeia: string = '';

  @Output()
 sendOnomatopoeiaParent: EventEmitter<string> = new EventEmitter();
  createOnomatopiaToParent(): void {
    this.sendOnomatopoeiaParent.emit(this.newOnomatopoeia);
  }
}
