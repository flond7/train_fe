import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../services/api.service';
//import { VIDEO_ONE } from './../../constants';

@Component({
  selector: 'app-railway',
  templateUrl: './railway.component.html',
  styleUrls: ['./railway.component.sass']
})

export class RailwayComponent implements OnInit {

  video: any;
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
  constructor(public api: ApiService) { }

  ngOnInit(): void {}

  videoDoneShowQuestions(done: boolean) {
    // if I'm done I don't need to show questions anymore
    this.showQuestions = !done;
  }

}
