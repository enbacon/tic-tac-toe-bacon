
## Technologies Used

- `html`
- `css`
- `sass`
- `bootstrap`
- `ajax`
- `jquery`

## Planning

- `Tic Tac Toe Bacon started with a few simple sketches of what might be an aesthetically pleasing single page application. There were deigns for a potential "initial page" layout, a "logged in" layout, a "winning/draw" layout, and two for the mobile designs.`

## Development Process and Problem Solving

- `Tic Tac Toe Bacon started with user sign up, authentication, change password, and sign out options. The reasoning for this was that without a user, there would be no one to play, and there happened to be some code handy that only needed modifications to complete these goals.`
- `Building a rough game board was next so the page would start to take form by showing everything that was desired in this application, but also to allow the API and game logic to begin.`
- `API calls were written for starting a new game, updating a game, getting the game histroy, and keeping track of a specific game.`
- `Being able to put a mark on the board and having that mark show up in the correct index of the game array was the next challenge as well as making sure that no marks were allowed to be placed in already occupied "tiles".`
- `Once the placements of marks were documented and sent to the API, the game logic was next.`
- `Conditions that are very simple on paper were broken down into pseudo code before properly being implemented in the events conditions.`
- `The same was true for the game logic. Although there were other ways of checking for wins, it was decided that it might be less straightforward for those who do not enjoy mathematics and the final code would be clearer for any developer who might take over this project.`
- `Difficulties that were faced included the ordering of checking for a win or a draw, when to switch the player, and when to call the API.`
- `Another logic challenge that took more time to fixed than one would have hoped, was properly locking the screen after a game has been completed, without requiring an "extra" click on the board. This issue finally was resolved by separating the win and draw conditions.`
- `At this point, the styling begun and the form of the application started to intentionally stray away from the designs created in the planning stages. Earlier designs were decided to be too crowded and busy.`
- `The implementation of a navigation bar allowed for the page to be less crowded allowing for the game board to become the main focus of the page, as it should be.`


## Unsolved Issues and Goals for Future Versions

- `Have the navigation bar automatically close once "New Game is selected without making the footer adjust size."`
- `Clean up the game user interface page.`
- `Clean up css and sass.`
- `Improve the during play and win notification message bar.`
- `Improve the "User ___ is signed in" status bar.`
- `Automatically log in users after clicking "Sign Up"`
- `Multi-player game`
- `Win-loss ratio`
- `Some animations`
- `Adjust the colors of the buttons in the navigation bar.`

## User Stories:

- `As a user,` I want to sign up for an account.
- `As a user,` I want to login to my account.
- `As a user,` I want start a new game when I am logged in to my account.
- `As a user,` I want to know whether player 'X' or player 'O' will make the next move.
- `As a user,` I want to know if I cannot place a mark in a speciffic spot during the game.
- `As a user,` I want to know if someone has won.
- `As a user,` I want to know who won.
- `As a user,` I want to know if there is a draw.
- `As a user,` I want to not be able to clutter up the board with extra marks after the end of a game.
- `As a user,` I want to know how many games I have played.
- `As a user,` I want to be able to change my password.
- `As a user,` I want to be able to log out of my account.
- `As a user,` I want to know my logout was successful

##

-`Wireframes for this project may be found at https://imgur.com/a/NxWg7Uq`
