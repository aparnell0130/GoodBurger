# GoodBurger
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  
  ## Table of Contents
  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Tools_&_Technologies](#Tools_&_Technologies)
  - [Code](#Code)
  - [Repo_Link](#Repo_Link)
  - [Example](#Example)
  - [License](#License)
  - [Author_Info](#Author_Info)

## Description
Eat-A-Burger is a restaurant app that lets users input the names of burgers they'd like to eat. Whenever a user submits a burger's name, the app will display the burger on the left side of the page, waiting to be devoured. Each burger in the waiting area also has a **Devour** button. When the user clicks it, the burger will move to the right side of the page. The app will store every burger in a database, whether devoured or not. When the burger moves to the devoured section a remove button will appear, giving the user the power to delete burgers at their discretion.

    Note: You will only need to do the installation once.

##  Installation
- Install node and MySQL
- Download repo zip file
- Enter "npm i" in VSCode integrated terminal or GitBash/Terminal while in correct folder.
- For database structure, run the schema file located in the db folder. 
    - If you have the the MySQL extension in VSCode, you can just run the file. Otherwise copy and paste it in your MySQL workbench. For test data you can run the seed file also located in the db folder.


## Usage
### After install 
1. Open VSCode integrated terminal or GitBash/Terminal
2. Path to correct folder
3. Run file by entering "node index.js" or "npm start"

## Tools_&_Technologies
- JavaScript
- Node
- MySQL
- npm packages 
    - mysql
    - express
    - express-handlebars

## Code
 orm update function
```JS
    update: (tableInput, cols, vals, condition, cb) => {
        const queryString = `UPDATE ${tableInput} SET ${cols} = ${vals} WHERE ${condition}`
        connection.query(queryString, (err, data) => {
            if (err) {
                throw err
            }
            cb(data)
        })
    }

```
## Repo_Link
- [Application Live Link](https://g00d-burger.herokuapp.com/)

## Example

![ALT TEXT](misc/img/demo.gif)

## License
- MIT License

Copyright (c) [2021] [Aaron Parnell]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. 

## Author_Info
  Github: [aparnell0130](https://github.com/aparnell0130)  
  LinkedIn: [Aaron Parnell](https://www.linkedin.com/in/aaron-parnell-1ab4661b3/)  
  Email: aparnell0130@gmail.com

[Back to top](#GoodBurger)
