import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.sass']
})
export class QuestionComponent implements OnInit {
  @Input() questionList: any;
  @Output() done = new EventEmitter();
  question : any;
  showQuestion = true;
  optionValue = '';
  q = 0;
  partialAnswers : any;  //{num: 0, result: 'wrong'};

  /*
    list of questions is passed as input and the first question selected (question)
    when the user answers we check it: if it's correct we go on to the next question
    otherwise the question is hidden (showQuestion) a warning message is shown (showWarningMessage)
    and the questions stop.
    Closing the warning message returns the user to the beginning of the video
    list of questions is passed as input
    when the user answers chech if it's correct or wrong
    save the question id (num) and the question result in a temp array (partialAnswers) that will later be sent to the service api
    repeat till you reach the end of the questions
    send the results to the api to save partial results
    emit the value to say that you're done and this value will be used by the page to load the data for the next video
  */

  constructor(public api: ApiService) { }

  ngOnInit() {
    //select the first question
    this.question = this.questionList[this.q];
  }

  checkQuestion() {
    let r = { num: this.question.id, result: '' };
    if (this.question.correct === this.optionValue) {
      r.result = 'correct';
    } else {
      r.result = 'wrong';
    };
    this.partialAnswers.push(r);
  }

  confirmAnswer() {
    this.checkQuestion();
    // if it's the last question save partial data, emit that you're done and hide the component
    if (this.q === this.questionList.length) {
      this.showQuestion = false;
      this.api.savePartialAnswer('ELISA', this.partialAnswers);
      this.done.emit(true);
      this.showQuestion = false;
      // if it's not the last question keep going and select the next one
    } else {
      this.q++;
      this.question = this.questionList[this.q];
    }
  }

}
