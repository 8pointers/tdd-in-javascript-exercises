## Exercise 1

Implement a function that makes a person happy by adding ' :)' to its name. A person is represented by an immutable object that has property called name, but may also have other properties (like age, address, ...). The function should return a new (happy :)) person object as a result.

Afterwards, implement a function that given an array of people makes them all happy.

## Exercise 2

Given an array of transactions:

```javascript
const transactions = [
  { accountId: 1, amount: 123.45 },
  { accountId: 2, amount: 67.89 },
  { accountId: 1, amount: 12.34 },
  { accountId: 3, amount: 23.45 },
  { accountId: 2, amount: 34.56 },
  { accountId: 4, amount: 45.67 }
];
```

1. implement a function that calculates minimum (maximum, total) transaction amount;
2. implement a function that calculates total amount for each account.
