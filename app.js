'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let seattle = {
  name: 'Seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  dailyTotal: 0,
  customersPerHour: [],
  cookiesPerHour: [],
  getRandomCustomers: function() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  }
}

let seattleData = document.getElementById('seattleData');
let seattleList = document.createElement('li');
for (let i=0; i < hours.length; i++){
  seattle.customersPerHour[i] = seattle.getRandomCustomers();
  seattle.cookiesPerHour[i] = Math.floor(seattle.avg * seattle.customersPerHour[i]);
  console.log(`${hours[i]} : ${seattle.cookiesPerHour[i]}`);
  // seattleList.innerText(`${hours[i]} : ${seattle.cookiesPerHour[i]}`);
  // seattleData.appendChild(seattleList);
}
