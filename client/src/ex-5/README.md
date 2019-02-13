## Exercise 1

- Refactor the messageOfTheDay.test.js so that hand-rolled stubs and mocks are replaced with the ones "automagically" created by jest.

## Exercise 2

- Test-drive and implement PseudoRandomRng that satisfies the interface required by MessageOfTheDay (getNumber(min, max)).

## Exercise 3

- Test-drive and implement an InstantGame class that, based on game configuration:

```javascript
const instantGameConfig = {
  gameId: 'HappyCows',
  ticketPrice: [1, 2, 5, 10],
  payTable: [
    { level: 0, multiplier: 0 },
    { level: 1, multiplier: 5, probability: 0.09 },
    { level: 2, multiplier: 50, probability: 0.01 },
    { level: 3, multiplier: 100, probability: 0.001 }
  ],
  scenarios: [
    { level: 0, data: 'scenario-0-0' },
    { level: 0, data: 'scenario-0-1' },
    { level: 0, data: 'scenario-0-2' },
    { level: 0, data: 'scenario-0-3' },
    { level: 0, data: 'scenario-0-4' },
    { level: 1, data: 'scenario-1-0' },
    { level: 1, data: 'scenario-1-1' },
    { level: 2, data: 'scenario-2-0' },
    { level: 3, data: 'scenario-3-0' }
  ]
};
```

can randomly generate a game round outcome, according to the specified level probabilities (the probability of level 0 is implicit - 1 - sum(pi, i >= 1)):

```javascript
const gameOutcome = {
  ticketPrice: 5,
  winAmount: 25,
  prizeLevel: 1,
  scenario: 'scenario-1-1'
};
```
