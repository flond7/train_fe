import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../services/api.service';
import { ActivatedRoute } from '@angular/router';
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

  // get id params and load correct rout information
  id: any;
  par: any;

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
  constructor(public api: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.par = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
    });
  }

  videoDoneShowQuestions(done: boolean) {
    // if I'm done I don't need to show questions anymore
    this.showQuestions = !done;
  }

}
