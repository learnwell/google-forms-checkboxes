import {
  Component,
  NgZone, ViewChild
} from '@angular/core';

import {
  CdkTextareaAutosize
} from '@angular/cdk/text-field';

import {take} from 'rxjs/operators';

import {
  CdkDragDrop, moveItemInArray
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-checkboxes',
  templateUrl: './checkboxes.component.html',
  styleUrls: ['./checkboxes.component.css']
})
export class CheckboxesComponent {
  editingIndex: number;
  questions = [
    {
      question: 'What is `blah`?',
      options:[
        {answer:'black', correct: true}
        ,{answer:'blue', correct: true}
        ,{answer:'red', correct: false}
        ,{answer:'green', correct: false}
      ]
    }
    ,{
      question: `
      What does this code do:
      \`\`\`
      import { Component, OnInit }
      from '@angular/core';
      import {CdkDragDrop, moveItemInArray}
      from '@angular/cdk/drag-drop';
      \`\`\`
      `,
      options:[
        {answer:'code', correct: false}
        ,{answer:'programming', correct: true}
        ,{answer:'OOP', correct: true}
        ,{answer:'functional', correct: false}
      ]
    }
    ,{
      question: 'What is blunt?',
      options:[
        {answer:'knife', correct: false}
        ,{answer:'rod', correct: true}
        ,{answer:'staff', correct: true}
        ,{answer:'shiv', correct: false}
      ]
    }
    ,{
      question: 'What is broken?',
      options:[
        {answer:'spirit', correct: true}
        ,{answer:'bone is better than \n flesh, i suppose', correct: false}
        ,{answer:'mind', correct: false}
        ,{answer:'logic', correct: true}
      ]
    }
  ];

  constructor(private ngZone: NgZone) { }
 
  /**
   * Automatically resizing a <textarea>
   * https://material.angular.io/cdk/text-field/overview
   */
  @ViewChild('autosize') autosize: CdkTextareaAutosize;
  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this.ngZone.onStable.pipe(take(1))
        .subscribe(() => this.autosize.resizeToFitContent(true));
  }

  onQuestionDrop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.questions, event.previousIndex, event.currentIndex);
  }

  onAnswerDrop(event: CdkDragDrop<string[]>) {
    moveItemInArray(event.item.data, event.previousIndex, event.currentIndex);
  }
}
