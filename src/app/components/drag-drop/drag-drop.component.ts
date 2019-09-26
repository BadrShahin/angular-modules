import { Component, OnInit } from '@angular/core';
import { GetCustomersService } from 'src/app/services/customers/get-customers.service';
import { CollectorService } from 'src/app/services/collectors/collector.service';
import { Post } from 'src/app/models/post';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.css']
})
export class DragDropComponent implements OnInit {

  // change type of customers from Post to Customer
  customersList: Post[] = [];
  customerAreasList: string[] = [];

  // Collectors 
  // change type of collectorsList from Post to Collector
  collectorsList: Post[] = [];


  selectedToAdd: any;
  selectedToRemove: any;
  selectedCustomers: Post[] = [];


  constructor(
    private getCustomersService: GetCustomersService,
    private collectorService: CollectorService
    ) { }

  ngOnInit() {
    // Call getCustomers method to get all customers data 
    this.getCustomers("posts");

    // Call getCustomers method to get all customers areas 
    this.getCustomerAreas("areas");
  }

  // Get All Customer Data
  getCustomers(url: string) {
    this.getCustomersService.getCustomers(environment.baseUrl + url)
      // .pipe(
      //   map(response => {
      //     if (!response){
      //       this.getCustomersService.handleError;
      //     }
      //     this.customers = response as Post[];
      //   }),
      //   catchError(this.getCustomersService.handleError)
      // );
      .subscribe(response => {
        if (!response) {
          this.getCustomersService.handleError;
        }
        this.customersList = response as Post[];
      },
        catchError(this.getCustomersService.handleError)
      );
  }

  // Get All Customers Areas
  getCustomerAreas(url: string) {
    this.getCustomersService.getCustomerAreas(environment.baseUrl + url)
      .subscribe(response => {
        if (!response) {
          this.getCustomersService.handleError;
        }
        this.customerAreasList = response as string[];
      },
        catchError(this.getCustomersService.handleError)
      );
  }

  // Get All Collectors Data
  getCollectors(url: string) {
    this.collectorService.getCollectors(environment.baseUrl + url)
      .subscribe(response => {
        if (!response) {
          this.collectorService.handleError;
        }
        this.collectorsList = response as Post[];
      },
        catchError(this.collectorService.handleError)
      );
  }

  selectedValues : number[] = [];
  // Handel Customers Area Change
  onSelectCustomersArea($event) {
    $event.value.forEach(element => {
      this.selectedValues.push(element.userId);
    });
  }

  addCustomersToCollectorBtn() {
    this.selectedCustomers = this.selectedCustomers.concat(this.selectedToAdd);
    this.customersList = this.customersList.filter(selectedData => {
      return this.selectedCustomers.indexOf(selectedData) < 0;
    });
    this.selectedToAdd = [];
  }

  removeCustomersFromCollectorBtn() {
    this.customersList = this.customersList.concat(this.selectedToRemove);
    this.selectedCustomers = this.selectedCustomers.filter(selectedData => {
      return this.customersList.indexOf(selectedData) < 0;
    });
    this.selectedToRemove = [];
  }




}
