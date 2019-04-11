import {
  Component
} from '@angular/core';

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

  onQuestionDrop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.questions, event.previousIndex, event.currentIndex);
  }
}
