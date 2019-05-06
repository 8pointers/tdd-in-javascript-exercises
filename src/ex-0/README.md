## Exercise 1

We are building a UI client for a roulette game, written by another team. The game should allow players to place bets, view and report on the winnings. To make it simple, we are not building in any fancy rules from the start. So here are our requirements:

- A player can place chips on number fields (0-36) to bet.
- Bets can have different chip values. A player can place any number of chips on any number of fields.
- The total number of chips is limited by the table and the table can refuse a bet if there are too many chips.
- Up to eight players can join a game and place bets. The table might refuse to accept a new player if it is full - the system should display an error message to the player in that case.
- Each player will be assigned a separate colour for chips when they join the table.

Bonus requirements:

- After a bet is placed, the system will display the fields with chips, printing the colour and amount of chips next to each field. The chips should be ordered by field and colour. Different bets placed on the same field by the same player are displayed as one group of chips.
- The system will calculate a percentage of the table covered by a player and display that after a bet is placed.

Pretend it's magic and that the roulette game, developed by that other team, is a black-box with all the features that we need, exposed with the API that is really nice, logical and easy to use. You don't know and don't care how it works inside, it just works and it does all the heavy lifting (eg checking balances). We just need to integrate with it and use its functionality, handling input from players and output to the screen.

### Your task is

- Demonstrate each of the requirements in pseudo-code, showing how you would use the API. The API can be anything you want.

Here are some ground rules:

- You are not allowed to work alone - work in pairs
- You are not allowed to use a computer, especially not an IDE
- The pseudo-code should be similar to the programming language you use normally, but does not have to compile
- It should explain the examples in detail - you can leave some unimportant parts out but be very precise with key aspects

The code should be as simple as possible - don't complicate it:

- Remember that the API already has all the functionality. You just need to handle keyboard inputs and screen outputs. And to make things simple, we are working on a text UI, not fancy graphics.
