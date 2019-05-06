import {
  Component, OnInit
} from '@angular/core';

import {
  CdkDragDrop, moveItemInArray
} from '@angular/cdk/drag-drop';
import { PollModel } from 'src/common/interfaces/questions-bank.interface';
import { QuestionBankService } from '../question-bank.service';

export interface Poll {
  question: string;
  options: Array<AnswerKey>
}

export interface AnswerKey {
  answer: string;
  correct?: boolean;
}

@Component({
  selector: 'app-checkboxes',
  templateUrl: './checkboxes.component.html',
  styleUrls: ['./checkboxes.component.css']
})
export class CheckboxesComponent implements OnInit {
  editingIndex: number;
  questions: PollModel[] = [];

  constructor(private readonly questionBankService: QuestionBankService) {}

  async ngOnInit() {
    this.questions = await this.questionBankService.getQuestions();
  }

  onQuestionDrop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.questions, event.previousIndex, event.currentIndex);
  }

  onAnswerDrop(event: CdkDragDrop<string[]>) {
    moveItemInArray(event.item.data, event.previousIndex, event.currentIndex);
  }
}
