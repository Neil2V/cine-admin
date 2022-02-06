import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cine-create',
  templateUrl: './cine-create.component.html',
  styleUrls: ['./cine-create.component.scss']
})
export class CineCreateComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  back(): void{
    this.router.navigate(['/cine-list']);
  }

}
