# Building a resturant application
- [Part 1](https://digitalskills.instructure.com/courses/3318/pages/rest-rant-part1-6-dot-3-4?module_item_id=389206): Project setup, stub three routes, and creating a README file
- [Part 2](https://digitalskills.instructure.com/courses/3318/pages/activity-6-dot-4-3?module_item_id=388979): Stub remaining GET and POST routes, planning mock restaurant data, drawing wireframes, and making your first view
- [Part 3]: Making more views, creating a layout page, and expanding your README
- [Part 4]: Adding some style with CSS
- [Part 5]: Forms, validation, and navigation
- [Part 6]: Implementing delete functionality and adding a DELETE route
- [Part 7]: Implementing edit form and functionality, adding a PUT route

## [Requirements](docs/user-stories.md)
- We are building a full-stack resturant reviewing app in express
- It will have several pages listed below in the routes table

## [Mockups](docs/mockups.png)

## Getting Started
- clone the project locally
- create `.env` file in project root, with a PORT defined...
- to get project dependencies `npm install` 
- to run the project `node index.js` 

## Routes Table
|Method|Path|Action
|-----|-----|-------|
|GET  | /   |Displays Home Page |
|GET  | /places | Displays Places index page|
|GET  | /places/new | Form page for creating a new place|
|POST  | /places | Create new place|
|GET  | /places/:index | Details about a place|
|GET  | /places/:index/edit | Edit form place details|
|PUT  | /places/:index |  Update place|
|DELETE  | /places/:index | Delete place|
|POST  | /places/:index/comments | Create a comment about a place|
|DELETE  | /places/:index/comments/:commentsIndex | Delete a comment about a place|
|GET  | * | 404 page (matches any route not defined above)|