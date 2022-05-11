import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../services/api.service';
import { mergeAll, groupBy, mergeMap, toArray } from 'rxjs';


@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.sass']
})
export class AchievementsComponent implements OnInit {

  openTab = 0;
  tabList = [];
  
  questionList = []
  userResults: Array<any> = [];
  userId = 2;
  

  constructor(public api: ApiService) { }

  ngOnInit(): void {
    this.api.getRailwayList().subscribe((res:any) => {
      this.tabList = res.map((el: any) => el.name);
      console.log(res)
    })

    this.api.getUserResults(this.userId).pipe(
      //create arrays of elements groupe by railwayId
      mergeAll(),
      groupBy((el: any) => el['railwayId']),
      mergeMap(group => group.pipe(toArray())),
    ).subscribe((res:any) => {
      this.userResults.push(res);
      console.log(res)
    })
  }

}
