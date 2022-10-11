'use strict';

// Global Values --------------------------------------------------

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let rushCurve = [0.5, 0.75, 1.0, 0.6, 0.8, 1.0, 0.7, 0.4, 0.6, 0.9, 0.7, 0.5, 0.3, 0.4, 0.6];
let hourlyTotals = [];
let hourlyStaffTotals = [];
for (let i=0; i < hours.length; i++) {
  hourlyTotals.push(0);
  hourlyStaffTotals.push(0);
}
let absoluteTotal = 0;
let absoluteStaffMax = 0;
let table = document.querySelectorAll('table');

// Header Section --------------------------------------------------

function getHeaders(){
  for (let a = 0; a < table.length; a++){
    let header = document.createElement('tr');
    header.setAttribute('class','tableHeader');
    table[a].appendChild(header);
    let th = document.createElement('th');
    th.setAttribute('class','tableHeader');
    th.innerText = 'Location';
    header.appendChild(th);
    for (let i=0; i < hours.length; i++) {
      let th = document.createElement('th');
      th.setAttribute('class','tableHeader');
      th.innerText = `${hours[i]}`;
      header.appendChild(th);
    }
    let total = document.createElement('th');
    total.setAttribute('class','tableHeader');
    if( a === 0) {
      total.innerText = 'Daily Location Total';
    } else if (a === 1) {
      total.innerText = 'Max Staff Required';
    }
    header.appendChild(total);
  }
}

getHeaders();

// Constructor Function ----------------------------------------------

function Location (name, min, max, avg) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.cookieTotal = 0;
  this.staffMax = 0;
  this.customersPerHour = [];
  this.cookiesPerHour = [];
  this.staffPerHour = [];
  this.getData = function(){
    for (let i=0; i < hours.length; i++){
      this.customersPerHour[i] = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
      this.cookiesPerHour[i] = Math.ceil(this.avg * this.customersPerHour[i] * rushCurve[i]);
      this.cookieTotal += this.cookiesPerHour[i];
      if(this.customersPerHour[i] / 20 < 2){
        this.staffPerHour[i] = 2;
      } else {
        this.staffPerHour[i] = Math.ceil(this.customersPerHour[i] / 20);
      }
      if(this.staffPerHour[i] > this.staffMax) {
        this.staffMax = this.staffPerHour[i];
      }
      hourlyTotals[i] += this.cookiesPerHour[i];
      absoluteTotal += this.cookiesPerHour[i];
      hourlyStaffTotals[i] += this.staffPerHour[i];
      if(hourlyStaffTotals[i] > absoluteStaffMax) {
        absoluteStaffMax = hourlyStaffTotals[i];
      }
    }
  };
  this.render = function() {
    for (let a = 0; a < table.length; a++){
      let row = document.createElement('tr');
      row.setAttribute('class',`${this.name}Data`);
      table[a].appendChild(row);
      let td = document.createElement('td');
      td.setAttribute('class',`${this.name}Data`);
      td.innerText = `${this.name}`;
      row.appendChild(td);

      // creates <td class="(Name)Data"> xxx cookies </td> on the row x14

      if(a === 0){
        for (let i=0; i < hours.length; i++){
          let td = document.createElement('td');
          td.setAttribute('class',`${this.name}Sales`);
          td.innerText = `${this.cookiesPerHour[i]}`;
          row.appendChild(td);
        }
      } else if (a === 1){
        for (let i=0; i < hours.length; i++){
          let td = document.createElement('td');
          td.setAttribute('class',`${this.name}Staff`);
          td.innerText = `${this.staffPerHour[i]}`;
          row.appendChild(td);
        }
      } else {
        return 'Error';
      }

      // creates <td class="totals"> xxx cookies </td> on last element of the row

      let total = document.createElement('td');
      total.setAttribute('class','totals');
      if(a === 0){
        total.innerText = `${this.cookieTotal}`;
      } else if (a === 1) {
        total.innerText = `${this.staffMax}`;
      } else {
        return 'Error';
      }
      row.appendChild(total);
    }
  };
  this.getData();
  this.render();
}

// Footer Section --------------------------------------------------

function getFooter(){
  for (let a = 0; a < table.length; a++){
    let footer = document.createElement('tr');
    footer.setAttribute('class','tableFooter');
    table[a].appendChild(footer);
    let th = document.createElement('th');
    th.setAttribute('class','tableFooter');
    th.innerText = 'Totals';
    footer.appendChild(th);
    for (let i=0; i < hours.length; i++) {
      let th = document.createElement('th');
      th.setAttribute('class','tableHeader');
      if(a === 0){
        th.innerText = `${hourlyTotals[i]}`;
      } else if (a === 1) {
        th.innerText = `${hourlyStaffTotals[i]}`;
      } else {
        return 'Error';
      }
      footer.appendChild(th);
    }
    let total = document.createElement('th');
    total.setAttribute('class','tableFooter');
    if (a === 0) {
      total.innerText = `${absoluteTotal}`;
    } else if (a === 1) {
      total.innerText = `${absoluteStaffMax}`;
    } else {
      return 'Error';
    }
    footer.appendChild(total);
  }
}

// Location Section ----------------------------------------------

let seattle = new Location('Seattle', 23, 65, 6.3);
let tokyo = new Location('Tokyo', 3, 24, 1.2);
let dubai = new Location('Dubai', 11, 38, 3.7);
let paris = new Location('Paris', 20, 38, 2.3);
let lima = new Location('Lima', 2, 16, 4.6);

// Total Section

getFooter();
