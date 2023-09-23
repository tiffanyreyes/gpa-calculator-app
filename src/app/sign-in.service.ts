/**
 * Title: sign-in.service.ts
 * Author: Tiffany Reyes
 * Date: 19 Sept 2023
 * Description: sign-in service
 */

// exporting book class elements
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignInService {
  // array of student IDs
  studentIds: Array<number> = [1007, 1008, 1009, 1010, 1011, 1012]

  constructor() { }

  validate(studentId: number) {
    return this.studentIds.some(id => id ===studentId);
  }
}
