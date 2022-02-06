import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cine-list',
  templateUrl: './cine-list.component.html',
  styleUrls: ['./cine-list.component.scss']
})
export class CineListComponent implements OnInit {

  pages: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

}
