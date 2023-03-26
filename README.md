# Project is using:
    React - https://pl.reactjs.org/
    Type Script - https://www.typescriptlang.org/
    Redux - https://redux.js.org/usage/usage-with-typescript
    Vite - https://vitejs.dev

# Getting Started

## Installation process
- Install any IDE of your choice
- Install node verion 18.14.2 or use nvm(Node version manager)
- Clone repository 
- Install node modules by npm install
- Start project npm run dev
- Now the project is running pres 'o' to opern browser with app

## Build and Test
To build project we need node 18.14.2 or use nvm to manage version of node.
Clone the repository and use npm install command to download and install all required node modules.
After instalatino is completed type 
- npm run build for build
- npm run dev to start project

## Description
This is a project I'm doing to defend my thesis. The project is a web application for publishing tests, performing tests by students. The application interface was designed by me personally. The application is being created for use at the university where I am defending my thesis. The application will be used for more convenient and fun learning for students

## file structure
1. assets 
    All images, styles or fonts and others that are not related to the code go here.
2. components
    Directories for sets of components, e.g. under the `ui` directory, will have the implementation of e-components button, input etc..
3. store
    Stor files from react. 
4. data
    I store various types of data here, for example in the `.json` file format. files with global variables or information about the theme of the application will also go here.
5. features
    It has internal directories for a group of functionalities, e.g.: `authorization`, this directory will have the functionality of login and logout. For the terminal functionality, we will have a directory `terminals` in which the functionalities to handle CRUD will be implemented. We provide functions through the `PUBLIC API`.
6. hooks
    All global hooks in the application, i.e. those that are used by different pages, go here.
7. layouts
    I'm adding components related to the layout of the application here. These will be, for example, any `navbar`, `sidebar`, any `contener`. 
8. lib
    I am implementing the facade pattern here to the libraries used in the system. This allows you not to import the library directly into the application. In the future, this will make it easier to change the library if it is no longer supported.
9. pages
    I store all pages here. Each page is a combination of all elements/components into a whole that is to be displayed to the user.
10. services
    I'm adding all the code related to requests to the API here.
11. utils
    I save all clean functions here. That is, those whose result depends only on the input parameters, for a specific set of input parameters there will always be the same result.