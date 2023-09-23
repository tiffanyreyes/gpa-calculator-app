/**
 * Title: base-layout.component.ts
 * Author: Tiffany Reyes
 * Date: 11 Sept 2023
 * Description: base-layout component
 */

// importing classes and modules
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent implements OnInit {

  // declaring variable
  assignment: string;

  constructor(private cookieService: CookieService, private router: Router) {
    this.assignment = 'GPA Calculator'
  }

  ngOnInit(): void {
  }

  // sign out function
  signOut() {
    this.cookieService.deleteAll();
    this.router.navigate(['/session/sign-in']);
  }
}
