import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Post } from 'src/app/models/post';

@Injectable({
  providedIn: 'root'
})
export class GetCustomersService {

  // Error Data
  errorData: {};

  constructor(private httpClient: HttpClient) { }

  // Get All Customers Data From API 
  getCustomers(url: string) {
    return this.httpClient.get(url);
  }


  // Get All Customers Area From API 
  getCustomerAreas(url: string) {
    return this.httpClient.get(url);
  }

  // Handel Error Method
  public handleError(error: HttpErrorResponse) {
   
    if (error.error instanceof ErrorEvent) {

      // A client-side or network error occurred. Handle it accordingly.
      console.error('Client-Side error occurred:', error.error.message);
    } else {

      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }

    // return an observable with a user-facing error message
    this.errorData = {
      errorTitle: 'Oops! Request for document failed',
      errorDesc: 'Something bad happened. Please try again later.'
    };
    return throwError(this.errorData);
  }
}
