/**
 * Title: gpa.component.ts
 * Author: Tiffany Reyes
 * Date: 17 Sept 2023
 * Description: gpa component
 */

// importing classes and modules
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-gpa',
  templateUrl: './gpa.component.html',
  styleUrls: ['./gpa.component.css']
})
export class GpaComponent implements OnInit {

  @Input() gpaTotal: number;

  constructor() { }

  ngOnInit(): void {
  }

}
