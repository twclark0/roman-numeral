# Roman Numeral Kata

## Setup instructions

- Clone this repository to your machine.
- Make sure you have `node` and `npm` installed on your machine.
- On the root, where the `package.json` lives, run `npm install`.
- Run `npm start` to start the server.
- Open a browser and navigate to: `http://localhost:8080/romannumeral?query=3999`

### Running tests

- Run `npm test` within the root of this project.

This runs the one test file located: `src/roman-numeral.test.js`

#### Engineering and Testing Methodology

- I decided to use `Node` and `Express` for the server because of how quickly it is to get up and running. Also, while I work in C# everyday, I am most comfortable in JavaScript.
- I followed a TDD (test driven development) implementation to this algorithm. Writing tests as I worked through the algorithm located `src/roman-numeral.js`. I am using `jest` as the testing framework because I feel this is also easy to use, load up, and runs the test quickly.

---

- I initially started with `create-react-app` for this project to add a view that a user could use but later removed it to better align with the kata instructions.

- To begin, I started out working through the basic implementation of the algorithm (numbers lower than 4000) with it's corresponding tests. Once I got all the tests working I then worked through error cases. As I went on to the next extension within the kata, I added more error case catches and tests as I ran into them. Finally I added the larger number logic, breaking out the initial lower number logic into it's own function, and added the final additional tests.

#### Packaging Layout

- `server` folder holds `Node` / `Express` server logic with the one endpoint `/romannumeral`
- `src` folder holds two files. `roman-numeral.js` holds algorithm and `roman-numeral.test.js` holds corresponding tests.
- `package.json` holds `Node` scripts to install dependencies, script to run server, and script to run tests.
- `README.md` holds instructions and details about the project.
- `.gitignore` ignores `node_modues` folder from being committed to Github.

#### Dependency attribution
- `express` package is required for creating the `Node` server
- `jest` package is required to run tests within `*.test.js` files.