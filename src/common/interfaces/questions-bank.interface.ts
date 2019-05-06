export const MCQ_RADIO: string = 'MCQ_RADIO';
export const MCQ_CHECKBOX: string = 'MCQ_CHECKBOX';
export const FILL_IN_THE_BLANKS: string = 'FILL_IN_THE_BLANKS';

export interface Answer {
  correct: boolean;
  content: string;
}

export class PollModel {
  public id?: string;
  constructor(public type: string, public content: string, public answers?: Answer[]) {}
  setContent(content: string) {
    this.content = content;
  }
}
