'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let sales = document.getElementById('sales');

// Prototype Section ----------------------------------------------

function Location (name, min, max, avg) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.cookieTotal = 0;
  this.customersPerHour = [];
  this.cookiesPerHour = [];
}

Location.prototype.getData = function () {
  let ul = document.createElement('ul');
  ul.setAttribute('class',`${this.name}Data`);
  ul.innerText = `${this.name} Data`;
  sales.appendChild(ul);
  for (let i=0; i < hours.length; i++){
    this.customersPerHour[i] = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    this.cookiesPerHour[i] = Math.floor(this.avg * this.customersPerHour[i]);
    this.cookieTotal += this.cookiesPerHour[i];
    let li = document.createElement('li');
    li.setAttribute('class',`${this.name}Data`);
    li.innerText = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;
    sales.appendChild(li);
  }
  let total = document.createElement('li');
  total.setAttribute('class','totals');
  total.innerText = `Total: ${this.cookieTotal} cookies`;
  sales.appendChild(total);
};

// Seattle Section ----------------------------------------------

let seattle = new Location('Seattle', 23, 65, 6.3);
seattle.getData();

// Tokyo Section ----------------------------------------------

let tokyo = new Location('Tokyo', 3, 24, 1.2);
tokyo.getData();

// Dubai Section ----------------------------------------------

let dubai = new Location('Dubai', 11, 38, 3.7);
dubai.getData();

// Paris Section ----------------------------------------------

let paris = new Location('Paris', 20, 38, 2.3);
paris.getData();

// Lima Section

let lima = new Location('Lima', 2, 16, 4.6);
lima.getData();
