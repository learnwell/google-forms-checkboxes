import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection } from '@angular/fire/firestore';
import {
  PollModel
} from 'src/common/interfaces/questions-bank.interface';

//TODO: links like a node linked list for directed graphs
@Injectable({
  providedIn: 'root'
})
export class QuestionBankService {
  private questionsCollection: AngularFirestoreCollection<any>;
  //questions: Observable<QuestionModel[]>;
  private questions: PollModel[];

  constructor(private firestore: AngularFirestore) {
    this.questionsCollection = this.firestore.collection<PollModel>('questions');
    /*this.questionsCollection.valueChanges().subscribe(
      (data) => {
        console.log(data);
      }
    );*/
  }

  addQuestion(question: PollModel) {
    //this.questions.push(question);
    this.questionsCollection.add({
      content: question.content,
      answers: question.answers,
      type: question.type
    }); // TODO: success/fail from server?
  }

  deleteQuestion(question: PollModel) {
    this.firestore.doc('questions/' + question.id).delete();
  }

  //getQuestions(): Observable<QuestionModel[]> {
  async getQuestions(): Promise<PollModel[]> {
    return await new Promise((resolve, reject) => {
      this.questionsCollection.snapshotChanges().subscribe(data => {
        this.questions = data.map(e => {
          return {
            id: e.payload.doc.id,
            ...e.payload.doc.data()
          };
        });

        console.log('Qs:', this.questions);
        resolve(this.questions);
      });
    });
  }
}
