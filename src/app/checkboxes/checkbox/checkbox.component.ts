import { Component, OnInit, Input } from '@angular/core';

import {
  CdkDragDrop, moveItemInArray
} from '@angular/cdk/drag-drop';

import { Poll } from '../checkboxes.component';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {

  @Input('data') poll: Poll;

  @Input('edit') edit: boolean;

  constructor() { }

  ngOnInit() {
  }

  onAnswerDrop(event: CdkDragDrop<string[]>) {
    moveItemInArray(event.item.data, event.previousIndex, event.currentIndex);
  }
}
