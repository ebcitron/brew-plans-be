🚫 Note: All lines that start with 🚫 are instructions and should be deleted before this is posted to your portfolio. This is intended to be a guideline. Feel free to add your own flare to it.

🚫 The numbers 1️⃣ through 3️⃣ next to each item represent the week that part of the docs needs to be comepleted by.  Make sure to delete the numbers by the end of Labs.

🚫 Each student has a required minimum number of meaningful PRs each week per the rubric.  Contributing to docs does NOT count as a PR to meet your weekly requirements.

# API Documentation

#### 1️⃣ Backend delpoyed at [🚫name service here](🚫add URL here) <br>

## 1️⃣ Getting started

To get the server running locally:

🚫 adjust these scripts to match your project

- Clone this repo
- **npm i** to install all required dependencies
- **npm run server** to start the local server
- **npm run test** to start server using testing environment

### Express

🚫 Why did you choose this framework?

-    Majority of the team has experience with node
-    Fast and easy to get up and running

## 2️⃣ Endpoints

🚫This is a placeholder, replace the endpoints, access controll, and descriptioin to match your project

#### Seeded Recipes Routes

| Method | Endpoint                | Access Control | Description                                  |
| ------ | ----------------------- | -------------- | -------------------------------------------- |
| GET    | `/seededRecipes/all` | N/A      | Returns every seeded recipe in the database|
| GET    | `/seededRecipes/:id` | N/A      | Returns seeded recipe by ID|
| POST   | `/seededRecipes/newseed` | N/A         | Creates a new seeded recipe|
| PUT    | `/seededRecipes/:id` | N/A         | Updates seed by ID|

#### Ingredients Routes(removed/changed after RC1)

| Method | Endpoint                | Access Control | Description                                  |
| ------ | ----------------------- | -------------- | -------------------------------------------- |
| GET    | `/ingredients/all` | N/A      | Returns every ingredient in the database|
| GET    | `/seededRecipes/:id` | N/A      | Returns ingredient by ID|
| POST   | `/seededRecipes/newingredient` | N/A         | Creates a new ingredient|
| PUT    | `/seededRecipes/:id` | N/A         | Updates ingredient by ID|


#### User Recipes Routes

| Method | Endpoint                | Access Control | Description                                  |
| ------ | ----------------------- | -------------- | -------------------------------------------- |
| GET    | `/seededRecipes/all` | N/A      | Returns every seeded recipe in the database|
| GET    | `/seededRecipes/:id` | N/A      | Returns seeded recipe by ID|
| POST   | `/seededRecipes/newseed` | N/A     | Creates a new seeded recipe|

#### User Routes

| Method | Endpoint            | Access Control      | Description                                 |
| ------ | ----------------------- | -------------- | -------------------------------------------- |
| POST    | `/register`        | new users           | registers the users with firebase authenticaion|
| POST    | `/login`           | registerd users     | logs in the user|


# Data Model

#### USERS


| NAME OF HEADER | TYPE |
| ------ | ----------------------- |
| id    | ID     |
| email    | string     |
| username    | string     |
| password    | string     |

#### USER RECIPES

| NAME OF HEADER | TYPE |
| ------ | ----------------------- |
| id    | ID     |
| title    | string     |
| brew_type    | string     |
| public_private    | binary     |
| water_temp    | integer     |
| user_id    | id that references to the user id |
| coarseness    | string     |
| ingredient_qty    | integer   |


#### SEEDED RECIPES


| NAME OF HEADER | TYPE |
| ------ | ----------------------- |
| id    | ID     |
| title    | string     |
| instructions    | string     |
| brew_type    | string     |
| water_temp    | integer     |
| coarseness    | integer |

#### INGREDIENTS


| NAME OF HEADER | TYPE |
| ------ | ----------------------- |
| id    | ID     |
| title    | string     |

## 2️⃣ Actions

#### REGISTER/LOGIN

| ACTION NAME | DESCRIPTION |
| ------ | ----------------------- |
| `createUser()` | sends the user information up to firebase and registers a new user|
| `checkIfAuthenticated()` | checks the user information against the firebase creds for auth |

#### USERS

| ACTION NAME | DESCRIPTION |
| ------ | ----------------------- |
| `findAllUsers()` | Returns all Users in the database |
| `findById(id)` | Returns User by ID |
| `add(user)` | Adds User by ID |
| `removeUser(id)` | Removes User by ID |
| `findByEmail(email)` | Finds User by Email |
| `FindByUsername(username)` | Finds User by Username |

#### SEEDED RECIPES

| ACTION NAME | DESCRIPTION |
| ------ | ----------------------- |
| `findAllSeededRecipes()` | Returns all seeded recipes in the database |
| `findById(id)` | Returns seeded recipe by ID |
| `add(seeded_recipes)` | Adds new seeded recipe |
| `removeSeededRecipe(id)` | Removes seeded recipe by ID |
| `updateSeededRecipe(id, changes)` | Updates seeded recipe by ID |

#### USER RECIPES

| ACTION NAME | DESCRIPTION |
| ------ | ----------------------- |
| `findAllRecipes()` | Returns all User recipes in the database |
| `findById(id)` | Returns user recipe by ID |
| `add(recipe)` | Adds new user recipe |
| `removeRecipe(id)` | Removes user recipe by ID |
| `updateUserRecipe(id, changes)` | Updates user recipe by ID |
| `findPostsByUserId(user_id)` | Updates user recipe by ID |

#### INGREDIENTS

| ACTION NAME | DESCRIPTION |
| ------ | ----------------------- |
| `findAllIngredients()` | Returns all ingredients in the database |
| `findById(id)` | Returns ingredient by ID |
| `add(recipe)` | Adds new ingredient |
| `removeIngredient(id)` | Removes ingredient by ID |
| `updateIngredient(id, changes)` | Updates ingredient by ID |
| `findByRecipe(recipe_id)` | Returns recipe by recipe ID |
| `checkIngredient(ingredient_title)` | Checks to see if the ingredient already exists by its title |
| `addQuantity(quantity, recipe_id, ingredient_title))` | Adding quantity by qty, recpie_id, and title |

## 3️⃣ Environment Variables

    * ENV = PORT: 6000
    * PROCFILE: Development(web npm start)
    * PROCFILE: Production()
    
## Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](./code_of_conduct.md). Please follow it in all your interactions with the project.

### Issue/Bug Request

 **If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**
 - Check first to see if your issue has already been reported.
 - Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
 - Create a live example of the problem.
 - Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes,  where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

### Attribution

These contribution guidelines have been adapted from [this good-Contributing.md-template](https://gist.github.com/PurpleBooth/b24679402957c63ec426).

## Documentation

See [Frontend Documentation](🚫link to your frontend readme here) for details on the fronend of our project.
🚫 Add DS iOS and/or Andriod links here if applicable.
