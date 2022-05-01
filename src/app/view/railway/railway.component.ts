import { Component, OnInit } from '@angular/core';
//import { VIDEO_ONE } from './../../constants';

@Component({
  selector: 'app-railway',
  templateUrl: './railway.component.html',
  styleUrls: ['./railway.component.sass']
})

export class RailwayComponent implements OnInit {

  //videoConfig = VIDEO_ONE;
  video = {
    duration: 1500,
    questions: [
      { question: 'what is the color of the sea?', options: ['red', 'blue', 'white'], correct: 'blue' },
      { question: 'what is the color of the sea?', options: ['red', 'blue', 'white'], correct: 'blue' }
    ]
  };
  showQuestions = true;
  intervalPassed: any;

  listaPunti = [
    { name: 'Partenza da Trieste', icon: '', color: '' },
    { name: 'Sistiana', icon: '', color: '' },
    { name: 'Altra fermata', icon: '', color: '' },
    { name: 'Passaggio a Udine', icon: 'circle-exclamation', color: 'danger' },
    { name: 'Pordenone, nulla da segnalare', icon: '', color: '' },
    { name: 'Mestre, rallentare', icon: 'bridge', color: 'warning' },
    { name: 'Venezia, velocità massima inferiore', icon: 'bridge', color: 'danger' },
    { name: 'Sosta obbligatoria', icon: '', color: '' },
  ];
  constructor() { }

  ngOnInit(): void { }

  playVideo() {
    // if video is played create an element that prevents stopping it and start timer so
    // that questions can be shown at the end
    this.intervalPassed = setInterval(() => {
      this.showQuestions = true;
    }, this.video.duration);
  }

  showHideQuestions(done: any) {
    // if I'm done I don't need to show questions anymore
    this.showQuestions = !done;
  }
}
