/**
 * Title: grade-summary.component.ts
 * Author: Tiffany Reyes
 * Date: 17 Sept 2023
 * Description: grade-summary component
 */

// importing classes and modules
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grade-summary',
  templateUrl: './grade-summary.component.html',
  styleUrls: ['./grade-summary.component.css']
})
export class GradeSummaryComponent implements OnInit {

  @Input() grade: string;
  @Input() course: string;

  constructor() { }

  ngOnInit(): void {
  }

}
