'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// Seattle Section ----------------------------------------------

let seattle = {
  name: 'Seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  cookieTotal: 0,
  customersPerHour: [],
  cookiesPerHour: [],
  getRandomCustomers: function() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  }
};

let seattleData = document.getElementById('seattleData');

for (let i=0; i < hours.length; i++){
  seattle.customersPerHour[i] = seattle.getRandomCustomers();
  seattle.cookiesPerHour[i] = Math.floor(seattle.avg * seattle.customersPerHour[i]);
  seattle.cookieTotal += seattle.cookiesPerHour[i];
  let li = document.createElement('li');
  li.innerText = `${hours[i]}: ${seattle.cookiesPerHour[i]} cookies`;
  seattleData.appendChild(li);
}

let seattleTotal = document.createElement('li');
seattleTotal.setAttribute('class','totals');
seattleTotal.innerText = `Total: ${seattle.cookieTotal} cookies`;
seattleData.appendChild(seattleTotal);

// Tokyo Section ----------------------------------------------

let tokyo = {
  name: 'Tokyo',
  min: 3,
  max: 24,
  avg: 1.2,
  cookieTotal: 0,
  customersPerHour: [],
  cookiesPerHour: [],
  getRandomCustomers: function() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  }
};

let tokyoData = document.getElementById('tokyoData');

for (let i=0; i < hours.length; i++){
  tokyo.customersPerHour[i] = tokyo.getRandomCustomers();
  tokyo.cookiesPerHour[i] = Math.floor(tokyo.avg * tokyo.customersPerHour[i]);
  tokyo.cookieTotal += tokyo.cookiesPerHour[i];
  let li = document.createElement('li');
  li.innerText = `${hours[i]}: ${tokyo.cookiesPerHour[i]} cookies`;
  tokyoData.appendChild(li);
}

let tokyoTotal = document.createElement('li');
tokyoTotal.setAttribute('class','totals');
tokyoTotal.innerText = `Total: ${tokyo.cookieTotal} cookies`;
tokyoData.appendChild(tokyoTotal);

// Dubai Section ----------------------------------------------

let dubai = {
  name: 'Dubai',
  min: 11,
  max: 38,
  avg: 3.7,
  cookieTotal: 0,
  customersPerHour: [],
  cookiesPerHour: [],
  getRandomCustomers: function() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  }
};

let dubaiData = document.getElementById('dubaiData');

for (let i=0; i < hours.length; i++){
  dubai.customersPerHour[i] = dubai.getRandomCustomers();
  dubai.cookiesPerHour[i] = Math.floor(dubai.avg * dubai.customersPerHour[i]);
  dubai.cookieTotal += dubai.cookiesPerHour[i];
  let li = document.createElement('li');
  li.innerText = `${hours[i]}: ${dubai.cookiesPerHour[i]} cookies`;
  dubaiData.appendChild(li);
}

let dubaiTotal = document.createElement('li');
dubaiTotal.setAttribute('class','totals');
dubaiTotal.innerText = `Total: ${dubai.cookieTotal} cookies`;
dubaiData.appendChild(dubaiTotal);

// Paris Section ----------------------------------------------

let paris = {
  name: 'Paris',
  min: 20,
  max: 38,
  avg: 2.3,
  cookieTotal: 0,
  customersPerHour: [],
  cookiesPerHour: [],
  getRandomCustomers: function() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  }
};

let parisData = document.getElementById('parisData');

for (let i=0; i < hours.length; i++){
  paris.customersPerHour[i] = paris.getRandomCustomers();
  paris.cookiesPerHour[i] = Math.floor(paris.avg * paris.customersPerHour[i]);
  paris.cookieTotal += paris.cookiesPerHour[i];
  let li = document.createElement('li');
  li.innerText = `${hours[i]}: ${paris.cookiesPerHour[i]} cookies`;
  parisData.appendChild(li);
}

let parisTotal = document.createElement('li');
parisTotal.setAttribute('class','totals');
parisTotal.innerText = `Total: ${paris.cookieTotal} cookies`;
parisData.appendChild(parisTotal);

// Lima Section

let lima = {
  name: 'Lima',
  min: 2,
  max: 16,
  avg: 4.6,
  cookieTotal: 0,
  customersPerHour: [],
  cookiesPerHour: [],
  getRandomCustomers: function() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  }
};

let limaData = document.getElementById('limaData');

for (let i=0; i < hours.length; i++){
  lima.customersPerHour[i] = lima.getRandomCustomers();
  lima.cookiesPerHour[i] = Math.floor(lima.avg * lima.customersPerHour[i]);
  lima.cookieTotal += lima.cookiesPerHour[i];
  let li = document.createElement('li');
  li.innerText = `${hours[i]}: ${lima.cookiesPerHour[i]} cookies`;
  limaData.appendChild(li);
}

let limaTotal = document.createElement('li');
limaTotal.setAttribute('class','totals');
limaTotal.innerText = `Total: ${lima.cookieTotal} cookies`;
limaData.appendChild(limaTotal);
