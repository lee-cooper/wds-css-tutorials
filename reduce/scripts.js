const people = [
  { name: "Lee", title: "Programmer" },
  { name: "John", title: "QA" },
  { name: "Liz", title: "Programmer" },
  { name: "Grace", title: "Product Owner" },
];

const employeeJobCollection = people.reduce((groupedPeople, person) => {
  if (!groupedPeople[person.title]) {
    groupedPeople[person.title] = [];
  }
  groupedPeople[person.title].push(person);

  return groupedPeople;
}, {});

console.log(employeeJobCollection);

// Result
// {
// Product Owner: [{name: "Grace", title: "Product Owner"}]
// Programmer: [{name: "Lee", title: "Programmer"}, {name: "Liz", title: "Programmer"}]
// QA: [{name: "John", title: "QA"}]
// }

const games = [
  { name: "Overwatch", price: 40 },
  { name: "Pokemon Shield", price: 60 },
  { name: "Hollow Knight", price: 15 },
  { name: "Bloodborne", price: 20 },
];

const totalCost = games.reduce((total, game) => {
  return total + game.price;
}, 0);

console.log(totalCost);

// Result
// 135
