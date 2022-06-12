import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../services/api.service';

@Component({
  selector: 'app-railway-list',
  templateUrl: './railway-list.component.html',
  styleUrls: ['./railway-list.component.sass']
})
export class RailwayListComponent implements OnInit {
  railwayList: Array<Object> = [];
  constructor(public api: ApiService) { }

  ngOnInit(): void {


    this.api.getRailwayList().subscribe((res:any) => {
      this.railwayList = res.results;
      //this.railwayList = res.results.map((el: any) => el.name);
      console.log(this.railwayList)
    })
  }

}
