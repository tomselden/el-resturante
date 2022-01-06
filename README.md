# Building a resturant application
- [Part 1](https://digitalskills.instructure.com/courses/3318/pages/rest-rant-part1-6-dot-3-4?module_item_id=389206): Project setup, stub three routes, and creating a README file

## Requirements
- We are building a full-stack resturant reviewing app in express
- It will have several pages listed below in the routes table

## Getting Started
- clone the project locally
- create `.env` file in project root, with a PORT defined...
- to get project dependencies `npm install` 
- to run the project `node index.js` 

## Routes Table
|Method|Path|Purpose
|-----|-----|-------|
|GET  | /   |Home Page |
|GET  | /places | Places index page|
|GET  | * | 404 page (matches any route not defined above)|