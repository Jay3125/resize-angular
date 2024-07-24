// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserApiService {

  // private apiUrl = 'https://jsonplaceholder.typicode.com/users'; // replace with your API URL

  private jsonData :any = [
    {
      "Name": "Tiger Nixon",
      "Position": "System Architect",
      "Office": "Edinburgh",
      "Age": 61,
      "Start date": "2011-04-25",
      "Salary": "$320,800"
    },
    {
      "Name": "Garrett Winters",
      "Position": "Accountant",
      "Office": "Tokyo",
      "Age": 63,
      "Start date": "2011-07-25",
      "Salary": "$170,750"
    },
    {
      "Name": "Ashton Cox",
      "Position": "Junior Technical Author",
      "Office": "San Francisco",
      "Age": 66,
      "Start date": "2009-01-12",
      "Salary": "$86,000"
    },
    {
      "Name": "Cedric Kelly",
      "Position": "Senior Javascript Developer",
      "Office": "Edinburgh",
      "Age": 22,
      "Start date": "2012-03-29",
      "Salary": "$433,060"
    },
    {
      "Name": "Airi Satou",
      "Position": "Accountant",
      "Office": "Tokyo",
      "Age": 33,
      "Start date": "2008-11-28",
      "Salary": "$162,700"
    },
    {
      "Name": "Brielle Williamson",
      "Position": "Integration Specialist",
      "Office": "New York",
      "Age": 61,
      "Start date": "2012-12-02",
      "Salary": "$372,000"
    },
    {
      "Name": "Herrod Chandler",
      "Position": "Sales Assistant",
      "Office": "San Francisco",
      "Age": 59,
      "Start date": "2012-08-06",
      "Salary": "$137,500"
    },
    {
      "Name": "Rhona Davidson",
      "Position": "Integration Specialist",
      "Office": "Tokyo",
      "Age": 55,
      "Start date": "2010-10-14",
      "Salary": "$327,900"
    }
  ];

  getUser():any[] {
    console.log(this.jsonData);
    return this.jsonData;  
  }
}
