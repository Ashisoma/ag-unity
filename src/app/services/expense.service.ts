import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export interface Expense{
  id: number;
  type: string;
  description: string;
  cost: number;
}
export class ExpenseService {

  public selectedExpenses = {};

  public expenses :Expense[] = [
    {
      id: 1, 
      type: 'tools',
      description:'Hoes, pangas', 
      cost: 500}
  ]

  constructor() { }

  public getExpenses(): Expense[] {
    return this.expenses;
  }

  // get by id
  /**
   * getById
   */
  public getById(id){
    //  this.expenses.
  }
}
