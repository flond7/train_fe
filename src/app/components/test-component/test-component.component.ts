import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.sass']
})
export class TestComponentComponent implements OnInit {

  constructor() { }
  faCoffee = faCoffee;
  
  ngOnInit(): void {
  }

}
